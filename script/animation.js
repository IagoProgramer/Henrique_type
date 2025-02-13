document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#646669'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#646669',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      }
    },
    retina_detect: true
  });

  // Cursor effect
  const cursor = document.querySelector('.cursor-effect');
  const typingArea = document.querySelector('.typing-area');

  typingArea.addEventListener('mousemove', (e) => {
    const rect = typingArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  });

  // Character pop effect on type
  document.addEventListener('keypress', () => {
    const currentChar = document.querySelector('.char.current');
    if (currentChar) {
      currentChar.style.transform = 'scale(1.2)';
      setTimeout(() => {
        currentChar.style.transform = 'scale(1)';
      }, 100);
    }
  });

  // Stats animation
  const stats = document.querySelectorAll('.stat-item');
  stats.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.2}s`;
  });
});

// Add smooth transitions for mode changes
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    const rect = this.getBoundingClientRect();
    ripple.style.top = `${rect.height / 2}px`;
    ripple.style.left = `${rect.width / 2}px`;
    
    setTimeout(() => ripple.remove(), 1000);
  });
});

// Add glowing effect to correct characters
function addGlowEffect(element) {
  element.style.textShadow = '0 0 8px rgba(209, 208, 197, 0.5)';
  setTimeout(() => {
    element.style.textShadow = '0 0 8px rgba(209, 208, 197, 0.3)';
  }, 200);
}

// Add hover effect to mode buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = 'translateY(-2px)';
    }
  });

  btn.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = 'translateY(0)';
    }
  });
});

// Add subtle animation to stats
document.querySelectorAll('.stat-item').forEach((stat, index) => {
  stat.style.animationDelay = `${index * 0.2}s`;
  
  stat.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.05)';
  });

  stat.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add dynamic particle effect on typing
document.addEventListener('keypress', () => {
  const particles = document.querySelector('#particles-js');
  particles.style.filter = 'brightness(1.2)';
  setTimeout(() => {
    particles.style.filter = 'brightness(1)';
  }, 100);
});

// Add success animation
function addSuccessAnimation() {
  const typingArea = document.querySelector('.typing-area');
  typingArea.classList.add('success-animation');
  setTimeout(() => {
    typingArea.classList.remove('success-animation');
  }, 500);
}

// Add animations for sub-mode buttons
document.querySelectorAll('.sub-mode-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.sub-mode-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentSubMode = this.dataset.mode;
    initGame();
    
    // Add click animation
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    const rect = this.getBoundingClientRect();
    ripple.style.top = `${rect.height / 2}px`;
    ripple.style.left = `${rect.width / 2}px`;
    
    setTimeout(() => ripple.remove(), 1000);
  });

  // Add hover animations
  btn.addEventListener('mouseenter', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = 'translateY(-1px)';
    }
  });

  btn.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = 'translateY(0)';
    }
  });
});
