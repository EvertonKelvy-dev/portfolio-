
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navlinks');
  const sections = document.querySelectorAll('.portfolio-section');
  const mobileBtn = document.getElementById('mobile_btn');
  const navMenu = document.querySelector('nav.nav');

  function closeMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  function openMenu() {
    if (navMenu) navMenu.classList.add('active');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  // clique nos links: troca de seções
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      navLinks.forEach(item => item.classList.remove('active-link'));
      link.classList.add('active-link');

      sections.forEach(section => section.classList.add('hidden'));
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) target.classList.remove('hidden');
      }

      if (window.innerWidth <= 1000) closeMenu();
    });
  });

  // toggle do botão mobile
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('active');
      if (isOpen) closeMenu();
      else openMenu();
    });
  }

  // fecha o menu se o usuário redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      if (navMenu) navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // fecha ao clicar fora do menu (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1000 && navMenu && navMenu.classList.contains('active')) {
      const inside = navMenu.contains(e.target) || (mobileBtn && mobileBtn.contains(e.target));
      if (!inside) closeMenu();
    }
  });

  // inicializa mostrando "sobre"
  const defaultSection = document.getElementById('sobre');
  if (defaultSection) {
    sections.forEach(s => s.classList.add('hidden'));
    defaultSection.classList.remove('hidden');
  }
});
