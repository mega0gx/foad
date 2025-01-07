function initializeHeader() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll === 0) {
      header.classList.remove('header--hidden');
      return;
    }

    if (currentScroll > lastScroll) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }

    lastScroll = currentScroll;
  });

  // Add mobile menu toggle functionality
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileNav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.header__overlay');
  const body = document.body;

  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle menu state
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = isExpanded ? '' : 'hidden';

    // Optional: Add animation class to menu items
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

  const searchToggle = document.querySelector('.js-search-toggle');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeButton = document.querySelector('.search-overlay__close');
  const searchInput = searchOverlay.querySelector('input[type="search"]');

  // Toggle search when clicking the search icon
  searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('is-active');
    body.style.overflow = 'hidden';
    searchInput.focus();
  });

  // Close when clicking the close button
  closeButton.addEventListener('click', () => {
    searchOverlay.classList.remove('is-active');
    body.style.overflow = '';
  });

  // Close when clicking outside the search form
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.classList.remove('is-active');
      body.style.overflow = '';
    }
  });

  // Close when pressing ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('is-active')) {
      searchOverlay.classList.remove('is-active');
      body.style.overflow = '';
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeHeader); 