document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');
  
  // Funkcija za zatvaranje menija
  function closeMenu() {
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }
  
  // Otvori/zatvori meni sa hamburger dugmetom
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
    });
    
    // Zatvori meni sa X dugmetom
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
      });
    }
    
    // Zatvori meni klikom na overlay
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }
    
    // Zatvori meni klikom van njega
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && mobileNav.classList.contains('active')) {
        closeMenu();
      }
    });
    
    // Zatvori meni nakon klika na link
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
  }
});
