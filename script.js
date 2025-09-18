document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navlinks');
  const sections = document.querySelectorAll('.portfolio-section');
  const mobileBtn = document.getElementById('mobile_btn');
  const navMenu = document.querySelector('nav.nav');

  // lidar com troca de seções (mantive sua lógica)
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      navLinks.forEach(item => item.classList.remove('active-link'));
      link.classList.add('active-link');

      sections.forEach(section => {
        section.classList.add('hidden');
      });

      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) target.classList.remove('hidden');
      }

      // se estiver em mobile, fecha o menu depois do clique
      if (window.innerWidth <= 1000 && navMenu) {
        navMenu.classList.remove('active');
      }
    });
  });

  // toggle do menu mobile
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});