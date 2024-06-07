// const burgerMenu = document.getElementById('burger-menu');
// const navItems = document.getElementById('nav-items');
// const closeMenu = document.getElementById('close-menu');

// const dropdownLinks = document.querySelectorAll('.dropdown-link');



// burgerMenu.addEventListener('click', () => {
//     navItems.classList.toggle('active');
//     if (navItems.classList.contains('active')) {
//         closeMenu.style.display = 'block';
//     } else {
//         closeMenu.style.display = 'none';
//     }
// });

// closeMenu.addEventListener('click', () => {
//     navItems.classList.remove('active');
//     closeMenu.style.display = 'none';
// });

// dropdownLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const dropdownContent = link.nextElementSibling;
//         dropdownContent.classList.toggle('active');
//         link.classList.toggle('active');
        


//           // Add back navigation to submenu
//           if (!dropdownContent.querySelector('.submenu-heading')) {
//             const backLink = document.createElement('div');
//             backLink.classList.add('submenu-heading');
//             backLink.innerText = link.innerText; // Create a back link with the text of the current dropdown
//             dropdownContent.prepend(backLink);

//             backLink.addEventListener('click', () => {
//                 dropdownContent.classList.remove('active'); // Remove active class to hide the submenu
//                 link.classList.remove('active');
//             });
//         }
        
        
//     });


     
//     });



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
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const dropdownContent = link.nextElementSibling;
        dropdownContent.classList.toggle('active');
        link.classList.toggle('active');
        
      
        
    });


     
    });
