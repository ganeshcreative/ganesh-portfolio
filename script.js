// ==========================
// GANESH PORTFOLIO
// script.js
// ==========================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// AOS Animation
AOS.init({
    duration:1000,
    once:true
});

// Navbar Background
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.85)";

}else{

header.style.background="rgba(0,0,0,.35)";

}

});

// Active Navigation
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Hero Image Animation
const image=document.querySelector(".image-box");

setInterval(()=>{

image.style.transform="translateY(-10px)";

setTimeout(()=>{

image.style.transform="translateY(0px)";

},1000);

},2000);

// Typing Effect
const roles=[
"Video Editor",
"Graphic Designer",
"Digital Marketer"
];

let roleIndex=0;

const roleElement=document.querySelector(".hero-left h2");

setInterval(()=>{

roleElement.innerHTML=roles[roleIndex];

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

},2500);

console.log("Ganesh Portfolio Loaded Successfully");
