/**
 * Canvas Confetti & Heart Burst Engine
 * Triggered on clicking "Make a Wish 🎂" button.
 */

export function triggerConfettiBurst() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '300';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const confettiCount = 120;
  const particles = [];

  const colors = ['#ff758c', '#ff7eb3', '#fda085', '#ffd166', '#7b2cbf', '#9d4edd', '#ffffff'];

  class ConfettiParticle {
    constructor() {
      this.x = width / 2;
      this.y = height / 2 + 100;
      this.size = Math.random() * 10 + 6;
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 16 + 8;
      
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - 6;
      this.gravity = 0.25;
      this.drag = 0.96;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.2;
      this.opacity = 1;
      this.isHeart = Math.random() > 0.6;
    }

    update() {
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.vy += this.gravity;
      
      this.x += this.vx;
      this.y += this.vy;
      
      this.rotation += this.rotationSpeed;
      this.opacity -= 0.008;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0, this.opacity);

      if (this.isHeart) {
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, topCurveHeight, 0, this.size);
        ctx.bezierCurveTo(this.size, topCurveHeight, this.size / 2, -this.size / 2, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < confettiCount; i++) {
    particles.push(new ConfettiParticle());
  }

  let animationFrame;

  function render() {
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;
    particles.forEach((p) => {
      p.update();
      p.draw();
      if (p.opacity > 0 && p.y < height + 50) {
        activeCount++;
      }
    });

    if (activeCount > 0) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}
