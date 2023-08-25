// select header
const header = document.querySelector('.header')
// select nav
// select nav trigger

// open - close menu

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
