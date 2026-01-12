function toggleMobileMenu() {
      const nav = document.getElementById('main-nav');
      nav.classList.toggle('active');
    }
    
    // Dropdown toggle for mobile
    function toggleDropdown(event) {
      event.stopPropagation();
      const navItem = event.target.closest('.nav-item');
      const wasOpen = navItem.classList.contains('open');
      
      // Close all other dropdowns
      document.querySelectorAll('.nav-item.open').forEach(item => {
        if (item !== navItem) {
          item.classList.remove('open');
        }
      });
      
      // Toggle current dropdown
      navItem.classList.toggle('open', !wasOpen);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const nav = document.getElementById('main-nav');
      const toggle = document.querySelector('.nav-toggle');
      
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('active');
      }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
