document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  
  // Funkcija za zatvaranje menija
  function closeMenu() {
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }
  
  // Funkcija za otvaranje menija
  function openMenu() {
    mobileNav.classList.add('active');
    menuToggle.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }
  
  // Toggle meni sa hamburger dugmetom
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (mobileNav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
  
  // Zatvori meni sa X dugmetom
  if (menuClose) {
    menuClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }
  
  // Zatvori meni klikom na overlay
  if (overlay) {
    overlay.addEventListener('click', function() {
      closeMenu();
    });
  }
  
  // Zatvori meni klikom van njega
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileNav && mobileNav.contains(event.target);
    const isClickOnToggle = menuToggle && menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && mobileNav && mobileNav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Zatvori meni nakon klika na link
  if (mobileNav) {
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
  }
});
