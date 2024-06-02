const burgerMenu = document.getElementById('burger-menu');
const navItems = document.getElementById('nav-items');
const closeMenu = document.getElementById('close-menu');




burgerMenu.addEventListener('click', () => {
    navItems.classList.toggle('active');
    if (navItems.classList.contains('active')) {
        closeMenu.style.display = 'block';
    } else {
        closeMenu.style.display = 'none';
    }
});

closeMenu.addEventListener('click', () => {
    navItems.classList.remove('active');
    closeMenu.style.display = 'none';
});

