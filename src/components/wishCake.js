/**
 * SVG Birthday Cake Component & Wish Modal Manager
 */

import { triggerConfettiBurst } from './confetti.js';
import { playCelebrationChime } from './audioPlayer.js';
import { BIRTHDAY_CONFIG } from '../config.js';

export function renderWishCake(containerEl) {
  if (!containerEl) return;

  containerEl.innerHTML = `
    <div class="cake-wrapper" id="interactive-cake" title="Click to blow out the candles!">
      <svg class="cake-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Cake Base Layer -->
        <rect x="25" y="130" width="150" height="45" rx="8" fill="url(#cakeBase)" />
        <path d="M25 130 C 50 142, 75 125, 100 138 C 125 125, 150 142, 175 130 L 175 142 C 150 154, 125 137, 100 150 C 75 137, 50 154, 25 142 Z" fill="#ff7eb3" opacity="0.8" />
        
        <!-- Cake Top Layer -->
        <rect x="45" y="85" width="110" height="45" rx="6" fill="url(#cakeTop)" />
        <path d="M45 85 C 65 95, 85 80, 105 92 C 125 80, 145 95, 155 85 L 155 95 C 145 105, 125 90, 105 102 C 85 90, 65 105, 45 95 Z" fill="#fda085" opacity="0.9" />

        <!-- Frosting Drips & Sprinkles -->
        <circle cx="60" cy="115" r="3" fill="#ffd166" />
        <circle cx="85" cy="122" r="3" fill="#ffffff" />
        <circle cx="115" cy="118" r="3" fill="#ff758c" />
        <circle cx="140" cy="124" r="3" fill="#ffd166" />
        <circle cx="70" cy="155" r="3.5" fill="#ffffff" />
        <circle cx="100" cy="162" r="3.5" fill="#ffd166" />
        <circle cx="130" cy="158" r="3.5" fill="#ff7eb3" />

        <!-- Candles -->
        <!-- Candle 1 -->
        <rect x="65" y="50" width="8" height="35" rx="2" fill="url(#candleGrad)" />
        <!-- Candle 2 (Center) -->
        <rect x="96" y="42" width="8" height="43" rx="2" fill="url(#candleGrad)" />
        <!-- Candle 3 -->
        <rect x="127" y="50" width="8" height="35" rx="2" fill="url(#candleGrad)" />

        <!-- Candle Wicks -->
        <line x1="69" y1="50" x2="69" y2="44" stroke="#444" stroke-width="1.5" />
        <line x1="100" y1="42" x2="100" y2="36" stroke="#444" stroke-width="1.5" />
        <line x1="131" y1="50" x2="131" y2="44" stroke="#444" stroke-width="1.5" />

        <!-- Flames -->
        <g class="candle-flames-group">
          <!-- Flame 1 -->
          <path class="candle-flame" d="M69 44 C64 36, 64 30, 69 24 C74 30, 74 36, 69 44 Z" fill="url(#flameGrad)" />
          <!-- Flame 2 -->
          <path class="candle-flame" d="M100 36 C95 27, 95 20, 100 14 C105 20, 105 27, 100 36 Z" fill="url(#flameGrad)" />
          <!-- Flame 3 -->
          <path class="candle-flame" d="M131 44 C126 36, 126 30, 131 24 C136 30, 136 36, 131 44 Z" fill="url(#flameGrad)" />
        </g>

        <!-- Smoke Particles -->
        <g class="smoke-group">
          <circle class="smoke-particle" cx="69" cy="24" r="4" fill="rgba(255,255,255,0.7)" />
          <circle class="smoke-particle" cx="100" cy="14" r="5" fill="rgba(255,255,255,0.7)" />
          <circle class="smoke-particle" cx="131" cy="24" r="4" fill="rgba(255,255,255,0.7)" />
        </g>

        <!-- SVG Gradients -->
        <defs>
          <linearGradient id="cakeBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7b2cbf" />
            <stop offset="100%" stop-color="#3c096c" />
          </linearGradient>
          <linearGradient id="cakeTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ff758c" />
            <stop offset="100%" stop-color="#ff7eb3" />
          </linearGradient>
          <linearGradient id="candleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffd166" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#ff4500" />
            <stop offset="50%" stop-color="#ffaa00" />
            <stop offset="100%" stop-color="#ffffcc" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

export function initWishEvents() {
  const wishBtn = document.getElementById('make-wish-btn');
  const cakeWrapper = document.getElementById('interactive-cake');
  const modalOverlay = document.getElementById('wish-modal');
  const modalClose = document.getElementById('modal-close');

  function triggerWishAction() {
    // 1. Play chime sound
    playCelebrationChime();

    // 2. Extinguish candle flames with smoke
    const flames = document.querySelectorAll('.candle-flame');
    const smokeParticles = document.querySelectorAll('.smoke-particle');

    flames.forEach((f) => f.classList.add('extinguished'));
    smokeParticles.forEach((s) => s.classList.add('active'));

    // 3. Fire confetti burst
    triggerConfettiBurst();

    // 4. Open Modal after short delay
    setTimeout(() => {
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    }, 500);
  }

  if (wishBtn) {
    wishBtn.addEventListener('click', triggerWishAction);
  }

  if (cakeWrapper) {
    cakeWrapper.addEventListener('click', triggerWishAction);
  }

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}
