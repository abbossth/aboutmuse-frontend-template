let menubar = document.querySelector('.fa-bars');
let menu = document.querySelector('.mu-mobile-menu');

menubar.addEventListener('click', function() {
    console.log('clicked');
    menu.classList.toggle('active-menu');

    // Toggle body scroll lock
    if (menu.classList.contains('active-menu')) {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scrolling
        document.body.style.overflow = '';
    }
});
