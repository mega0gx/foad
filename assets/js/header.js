function initializeHeader() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll === 0) {
      header.classList.remove('header--hidden');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }

    lastScroll = currentScroll;
  });

  // Mobile menu functionality
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileNav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.header__overlay');
  const body = document.body;

  if (menuToggle && mobileNav && overlay) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu state
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      body.style.overflow = isExpanded ? '' : 'hidden';

      // Menu items animation
      const menuItems = document.querySelectorAll('.header__menu-item');
      menuItems.forEach((item, index) => {
        if (!isExpanded) {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.style.transform = 'translateX(0)';
          item.style.opacity = '1';
        } else {
          item.style.transitionDelay = '0s';
          item.style.transform = 'translateX(20px)';
          item.style.opacity = '0';
        }
      });
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    });
  }
} 