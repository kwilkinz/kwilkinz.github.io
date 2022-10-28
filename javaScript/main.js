const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');





// TODO Convert janilla js to Jquery 

// 1. Function on click toggle the nav bar to open 
navToggle.addEventListener('click', () => {             //when clicked complete function
    document.body.classList.toggle('nav-open');         //everytime click on button it 
});

// 2. Function: when click on link, hamburger will disapear 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');     //remove it when click on links
    })
}); 

