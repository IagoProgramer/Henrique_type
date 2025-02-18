document.addEventListener('DOMContentLoaded', () => {
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

// Add developer modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const devInfoBtn = document.querySelector('.dev-info-btn');
  const devModal = document.querySelector('.dev-modal');
  const devModalClose = document.querySelector('.dev-modal-close');

  if (devInfoBtn && devModal && devModalClose) {
    devInfoBtn.addEventListener('click', () => {
      devModal.style.display = 'flex';
    });

    devModalClose.addEventListener('click', () => {
      devModal.style.display = 'none';
    });

    devModal.addEventListener('click', (e) => {
      if (e.target === devModal) {
        devModal.style.display = 'none';
      }
    });
  }
});
