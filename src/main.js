/**
 * Main Application Orchestrator
 */

import { BIRTHDAY_CONFIG } from './config.js';
import { initCanvasParticles } from './components/canvasParticles.js';
import { initAudioPlayer } from './components/audioPlayer.js';
import { renderWishCake, initWishEvents } from './components/wishCake.js';
import { initScrollReveal } from './components/scrollReveal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Config Data into HTML Elements
  injectContent();

  // 2. Render Interactive SVG Cake
  const cakeContainer = document.getElementById('cake-container');
  renderWishCake(cakeContainer);

  // 3. Initialize Background Particle System
  initCanvasParticles();

  // 4. Initialize Background Music Player
  initAudioPlayer();

  // 5. Initialize Wish Events & Confetti Listener
  initWishEvents();

  // 6. Initialize Navigation Drawer & Active Links
  initNavigation();

  // 7. Initialize Scroll Reveal Animations
  initScrollReveal();

  // 8. Initialize 3D Card Tilt Effects
  initCard3DTilt();
});

/**
 * Populate index.html elements using values from config.js
 */
function injectContent() {
  // Hero Section
  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroCta = document.getElementById('hero-cta');
  const heroMadeWithLove = document.getElementById('hero-made-with-love');

  if (heroBadge) heroBadge.textContent = BIRTHDAY_CONFIG.hero.badge;
  if (heroTitle) heroTitle.innerHTML = BIRTHDAY_CONFIG.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = BIRTHDAY_CONFIG.hero.subtitle;
  if (heroCta) heroCta.querySelector('span').textContent = BIRTHDAY_CONFIG.hero.ctaButton;
  if (heroMadeWithLove) heroMadeWithLove.innerHTML = `${BIRTHDAY_CONFIG.hero.madeWithLove.replace('❤️', '<span class="heart">❤️</span>')}`;

  // Photo Section
  const mainPhotoImg = document.getElementById('main-photo-img');
  const mainPhotoCaption = document.getElementById('main-photo-caption');

  if (mainPhotoImg) {
    const photoUrl = BIRTHDAY_CONFIG.photo.url;
    mainPhotoImg.src = photoUrl;
    mainPhotoImg.alt = BIRTHDAY_CONFIG.photo.alt;
    mainPhotoImg.onerror = function() {
      if (!this.getAttribute('data-tried')) {
        this.setAttribute('data-tried', '1');
        const fname = photoUrl.split('/').pop();
        this.src = `./public/${fname}`;
      }
    };
  }
  if (mainPhotoCaption) mainPhotoCaption.textContent = BIRTHDAY_CONFIG.photo.caption;

  // Personal Birthday Message Section
  const messageContainer = document.getElementById('message-container');
  if (messageContainer && BIRTHDAY_CONFIG.message.paragraphs) {
    messageContainer.innerHTML = BIRTHDAY_CONFIG.message.paragraphs
      .map((p) => `<p class="message-paragraph">${p}</p>`)
      .join('');
  }

  // Memories Section
  const memoriesContainer = document.getElementById('memories-container');
  if (memoriesContainer && BIRTHDAY_CONFIG.memories) {
    memoriesContainer.innerHTML = BIRTHDAY_CONFIG.memories
      .map(
        (mem) => `
      <div class="memory-card reveal-on-scroll">
        <div class="memory-image-container">
          <img src="${mem.image}" alt="${mem.title}" class="memory-image" loading="lazy" onerror="if(!this.getAttribute('data-tried')){this.setAttribute('data-tried','1');this.src='./public/${mem.image.split('/').pop()}';}" />
          <span class="memory-date-badge">${mem.date}</span>
        </div>
        <div class="memory-content">
          <h3 class="memory-title">${mem.title}</h3>
          <p class="memory-caption">${mem.caption}</p>
        </div>
      </div>
    `
      )
      .join('');
  }

  // Qualities Section
  const qualitiesContainer = document.getElementById('qualities-container');
  if (qualitiesContainer && BIRTHDAY_CONFIG.qualities) {
    qualitiesContainer.innerHTML = BIRTHDAY_CONFIG.qualities
      .map(
        (q) => `
      <div class="quality-card reveal-on-scroll" style="--quality-gradient: ${q.gradient}">
        <div class="quality-icon-wrapper">
          <span>${q.title.split(' ').slice(-1)[0]}</span>
        </div>
        <h3 class="quality-title">${q.title}</h3>
        <p class="quality-description">${q.description}</p>
      </div>
    `
      )
      .join('');
  }

  // Wish Section
  const wishQuote = document.getElementById('wish-quote');
  const wishSubtext = document.getElementById('wish-subtext');
  const makeWishBtn = document.getElementById('make-wish-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');

  if (wishQuote) wishQuote.textContent = BIRTHDAY_CONFIG.wishSection.quote;
  if (wishSubtext) wishSubtext.textContent = BIRTHDAY_CONFIG.wishSection.subtext;
  if (makeWishBtn) makeWishBtn.textContent = BIRTHDAY_CONFIG.wishSection.buttonText;
  if (modalTitle) modalTitle.textContent = BIRTHDAY_CONFIG.wishSection.wishConfirmationTitle;
  if (modalText) modalText.textContent = BIRTHDAY_CONFIG.wishSection.wishConfirmationText;

  // Music Metadata
  const musicTitleText = document.getElementById('music-title-text');
  if (musicTitleText && BIRTHDAY_CONFIG.music.title) {
    musicTitleText.textContent = BIRTHDAY_CONFIG.music.title;
  }
}

/**
 * Navbar blur on scroll & mobile drawer handler
 */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar glass backdrop on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Active Section Highlight
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
}

/**
 * Add subtle 3D tilt interaction to memory cards on hover
 */
function initCard3DTilt() {
  const cards = document.querySelectorAll('.memory-card, .quality-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}
