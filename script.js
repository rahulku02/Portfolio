/* ==========================================================
        RAHUL KUMAR PORTFOLIO
        SCRIPT.JS PART - 1
========================================================== */

/* =========================================
        LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2500);

});


/* =========================================
        STICKY NAVBAR
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "rgba(8,16,31,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(8,16,31,.60)";
        header.style.boxShadow = "none";

    }

});


/* =========================================
        SCROLL TO TOP
========================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* =========================================
        CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/* =========================================
        TYPING EFFECT
========================================= */

const words = [

    "Data Analyst",

    "Web Developer",

    "Python Developer",

    "Excel Enthusiast"

];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,letterIndex+1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,letterIndex-1);

        letterIndex--;

        if(letterIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 60 : 120);

}

typeEffect();


/* =========================================
        SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* =========================================
        END OF PART-1
========================================= */
/* ==========================================================
        SCRIPT.JS PART - 2
========================================================== */

/* =========================================
        MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

/* =========================================
        CLOSE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/* =========================================
        ACTIVE NAVBAR LINK
========================================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================================
        SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(

".section-title,.about-container,.skill-card,.timeline-item,.edu-card,.project-card,.certificate-card,.contact-container"

);

function revealOnScroll(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================================
        PROJECT CARD HOVER
========================================= */

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/* =========================================
        SKILL CARD HOVER
========================================= */

document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/* =========================================
        COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const c=+counter.innerText;

        const increment=target/80;

        if(c<target){

            counter.innerText=Math.ceil(c+increment);

            setTimeout(updateCounter,30);

        }

        else{

            counter.innerText=target;

        }

    };

    updateCounter();

});


/* =========================================
        IMAGE ZOOM
========================================= */

const profileImage = document.querySelector(".image-box img");

if(profileImage){

profileImage.addEventListener("mouseenter",()=>{

profileImage.style.transform="scale(1.05)";

});

profileImage.addEventListener("mouseleave",()=>{

profileImage.style.transform="scale(1)";

});

}

/* =========================================
        END PART-2
========================================= */
/* ==========================================================
        SCRIPT.JS PART - 3 (FINAL)
========================================================== */

/* =========================================
        CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const inputs=this.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}else{

input.style.border="1px solid rgba(255,255,255,.08)";

}

});

if(valid){

alert("✅ Thank you! Your message has been recorded.\n\n(Firebase integration will be added later.)");

this.reset();

}

});

}

/* =========================================
        DYNAMIC COPYRIGHT YEAR
========================================= */

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=`© ${new Date().getFullYear()} Rahul Kumar. All Rights Reserved.`;

}

/* =========================================
        NAVBAR SHADOW EFFECT
========================================= */

window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

if(window.scrollY>30){

nav.classList.add("nav-shadow");

}else{

nav.classList.remove("nav-shadow");

}

});

/* =========================================
        PARALLAX HERO IMAGE
========================================= */

const heroImage=document.querySelector(".image-box");

window.addEventListener("mousemove",(e)=>{

if(heroImage){

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

}

});

/* =========================================
        BUTTON RIPPLE EFFECT
========================================= */

document.querySelectorAll(".btn,.btn2").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-this.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/* =========================================
        FADE IN PAGE
========================================= */

document.body.style.opacity="0";

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});

/* =========================================
        PRELOAD IMAGES
========================================= */

document.querySelectorAll("img").forEach(img=>{

const image=new Image();

image.src=img.src;

});

/* =========================================
        DISABLE RIGHT CLICK
        (REMOVE IF NOT REQUIRED)
========================================= */

// document.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// });

/* =========================================
        DISABLE F12
        (OPTIONAL)
========================================= */

// document.onkeydown=function(e){
//
// if(e.key==="F12"){
//
// return false;
//
// }
//
// };

/* =========================================
        FIREBASE PLACEHOLDER
========================================= */

/*

--------------------------------------------

Firebase Integration

1. Create Firebase Project

2. Enable Firestore

3. Enable Hosting (Optional)

4. Enable Authentication (Optional)

5. Replace Config Below

const firebaseConfig={

apiKey:"",

authDomain:"",

projectId:"",

storageBucket:"",

messagingSenderId:"",

appId:""

}

--------------------------------------------

*/

/* =========================================
        CONSOLE MESSAGE
========================================= */

console.log("%cWelcome to Rahul Kumar Portfolio 🚀",
"color:#3b82f6;font-size:22px;font-weight:bold;");

console.log("%cDesigned & Developed by Rahul Kumar",
"color:#ffffff;font-size:16px;");

/* =========================================
        END OF SCRIPT.JS
========================================= */