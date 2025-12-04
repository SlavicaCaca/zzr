// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    // Zatvori meni kada se klikne van njega
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
    
    // Zatvori meni nakon klika na link
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
    });
    
    // Zatvori meni klikom na overlay
    if (overlay) {
      overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
    
    // Zatvori meni klikom van njega
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      }
    });
    
    // Zatvori meni nakon klika na link
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      });
    });
  }
});
