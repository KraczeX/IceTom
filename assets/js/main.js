
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

