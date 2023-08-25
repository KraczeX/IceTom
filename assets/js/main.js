// select header
const header = document.querySelector('.header');
// select nav
document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.header__nav-trigger');
    const nav = document.querySelector('.nav');

    navTrigger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});


// header background on scroll
window.addEventListener('scroll', () =>{
    if(window.scrollY > 40){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

// Initialize Swiper

// Scroll Reveal
