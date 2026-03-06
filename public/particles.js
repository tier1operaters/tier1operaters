// Simple animated water droplets using canvas
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'water-particles';
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '2';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let droplets = [];
  const DROPLET_COUNT = 32;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function randomDroplet() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 6 + Math.random() * 10,
      vy: 0.5 + Math.random() * 1.5,
      alpha: 0.15 + Math.random() * 0.25,
    };
  }

  function initDroplets() {
    droplets = [];
    for (let i = 0; i < DROPLET_COUNT; i++) {
      droplets.push(randomDroplet());
    }
  }
  initDroplets();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const d of droplets) {
      ctx.globalAlpha = d.alpha;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#F8FAFC';
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
      d.y += d.vy;
      if (d.y - d.r > canvas.height) {
        Object.assign(d, randomDroplet(), { y: -d.r });
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
});
