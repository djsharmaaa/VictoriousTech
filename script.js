const burgerMenu = document.getElementById('burger-menu');
const navItems = document.getElementById('nav-items');
const closeMenu = document.getElementById('close-menu');

const dropdownLinks = document.querySelectorAll('.dropdown-link');



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


dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        const dropdownContent = link.nextElementSibling;
        dropdownContent.classList.toggle('active');
        
        
   
    });
});



