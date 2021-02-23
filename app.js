// function show(){
//     var x = document.getElementsByClassName("nav");
//     if (x.style.display === "none") {
// x.style.display = "flex";

// } else {
// x.style.display = "none";
// }
// }


const open = () => {
    const burger = document.querySelector('.burger');
    const nav = document.getElementsByClassName('nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
}

open();