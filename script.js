// =====================================
// GANESH PORTFOLIO
// script.js
// =====================================

// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

setTimeout(()=>{

loader.style.display="none";

},600);

},1200);

}

});

// AOS

AOS.init({

duration:1000,
once:true,
offset:100

});

// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.90)";
header.style.boxShadow="0 5px 25px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(0,0,0,.55)";
header.style.boxShadow="none";

}

});

// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.pageYOffset>=sectionTop){

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

// Hero Floating Animation

const image=document.querySelector(".image-box");

if(image){

setInterval(()=>{

image.style.transform="translateY(-10px)";

setTimeout(()=>{

image.style.transform="translateY(0px)";

},1000);

},2000);

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Portfolio Card Hover

const cards=document.querySelectorAll(".portfolio-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// Console

console.log("Ganesh Portfolio Loaded Successfully");});

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
