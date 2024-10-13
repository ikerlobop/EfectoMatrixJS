  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  let fontSize = 16;
  let columns;
  let drops = [];
  const letters = 'アァカサタナハマヤャラワンABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';

  function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    fontSize = Math.max(canvas.width / 100, 20); 
    columns = Math.floor(canvas.width / fontSize);

    drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height / fontSize;
    }
  }

  function draw() {
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
  }

  window.addEventListener('resize', initMatrix);

  initMatrix(); 
  setInterval(draw, 33); 
