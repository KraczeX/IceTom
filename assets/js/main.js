
const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.header__nav-trigger');
    const nav = document.querySelector('.nav');

    navTrigger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});


window.addEventListener('scroll', () =>{
    if(window.scrollY > 40){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.hero__title, .features__container, .companies__pretitle, .companies__title, .footer__container');
sr.reveal('.hero__subtitle', {delay: 500});
sr.reveal('.hero__btn', {delay: 500});
sr.reveal('.hero__img', {delay: 600, origin: 'bottom'});
sr.reveal('.feature', {interval: 100});
sr.reveal('.section-primary__img', { origin: 'left'});
sr.reveal('.section-primary__text', { origin: 'right'});

sr.reveal('.brands__item', { interval: '100'});
