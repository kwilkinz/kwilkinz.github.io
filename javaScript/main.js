const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Not working at the moment with Github

// document.querySelector(document).ready(function(){
//     document.querySelector(".project-filter li").click(function(){
//         document.querySelector(this).classList.add("project-filter-active").siblings().classList.remove("project-filter-active");
//     })
// })\


// document.querySelector(document).ready(function(){
//     document.querySelector(".list").click(function(){
//         const value = document.querySelector(this).attr("data-filter");
//         if(value == "all"){
//             document.querySelector(".project-box").show("1000");
//         } else {
//             document.querySelector(".project-box").not("."+value).hide("1000");
//             document.querySelector(".project-box").filter("."+value).show("1000");
//         }
//     })
// })


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

