 const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('left-[-100%]');
    mobileMenu.classList.add('left-0');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('left-0');
    mobileMenu.classList.add('left-[-100%]');
  });