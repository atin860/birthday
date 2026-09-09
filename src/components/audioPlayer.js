/**
 * Background Music Player & Web Audio Celebration Sound Manager
 */

import { BIRTHDAY_CONFIG } from '../config.js';

let audio = null;
let isPlaying = false;
let audioCtx = null;

export function initAudioPlayer() {
  const widget = document.getElementById('music-widget');
  const btn = document.getElementById('music-btn');
  const status = document.getElementById('music-status');

  if (!widget || !btn) return;

  // Initialize HTML Audio element
  audio = new Audio(BIRTHDAY_CONFIG.music.url);
  audio.loop = true;
  audio.volume = 0.5;

  function togglePlay() {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      widget.classList.remove('playing');
      btn.innerHTML = '🎵';
      if (status) status.textContent = 'Paused • Click to play';
    } else {
      audio.play().then(() => {
        isPlaying = true;
        widget.classList.add('playing');
        btn.innerHTML = '⏸';
        if (status) status.textContent = 'Playing • Birthday Vibes';
      }).catch((err) => {
        console.warn('Audio play prevented or error:', err);
        // Fallback chime
        playCelebrationChime();
      });
    }
  }

  widget.addEventListener('click', togglePlay);
}

/**
 * Web Audio Synthesizer Chime for Wish Button & Fallback audio
 */
export function playCelebrationChime() {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6

    notes.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.1);

      gain.gain.setValueAtTime(0.3, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.1 + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + index * 0.1);
      osc.stop(now + index * 0.1 + 0.85);
    });
  } catch (e) {
    console.log('Web Audio API not supported or inactive', e);
  }
}
