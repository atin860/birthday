/**
 * Floating Stars, Hearts & Sparkles Canvas Particle System
 * Keeps rendering smooth 60fps dreamy background particles.
 */

export function initCanvasParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle configuration
  const particleCount = Math.min(Math.floor(window.innerWidth / 15), 65);
  const particles = [];

  const types = ['star', 'heart', 'sparkle', 'dot'];
  const colors = [
    'rgba(255, 117, 140, ',   // primary pink
    'rgba(255, 126, 179, ',   // secondary pink
    'rgba(253, 160, 133, ',   // peach
    'rgba(255, 209, 102, ',   // gold
    'rgba(157, 78, 221, '     // violet
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 8 + 3;
      this.speedY = Math.random() * 0.8 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
      this.type = types[Math.floor(Math.random() * types.length)];
      this.pulseSpeed = Math.random() * 0.03 + 0.01;
      this.angle = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.y -= this.speedY;
      this.x += Math.sin(this.angle) * 0.5 + this.speedX;
      this.angle += this.rotSpeed;

      // Pulse opacity
      this.opacity += Math.sin(this.angle * 2) * 0.005;

      // Reset when particle floats off top
      if (this.y < -30 || this.opacity <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = `${this.colorPrefix}${Math.max(0.1, Math.min(0.8, this.opacity))})`;

      if (this.type === 'heart') {
        // Draw Heart Shape
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, topCurveHeight, 0, this.size);
        ctx.bezierCurveTo(this.size, topCurveHeight, this.size / 2, -this.size / 2, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
      } else if (this.type === 'star') {
        // Draw 4-point sparkle star
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * this.size, Math.sin((i * Math.PI) / 2) * this.size);
          ctx.lineTo(
            (Math.cos((i * Math.PI) / 2 + Math.PI / 4) * this.size) / 3,
            (Math.sin((i * Math.PI) / 2 + Math.PI / 4) * this.size) / 3
          );
        }
        ctx.closePath();
        ctx.fill();
      } else {
        // Draw Glowing Circle / Dot
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  // Desktop Cursor Follow Effect
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
    });
  }
}
