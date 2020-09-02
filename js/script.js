////// suavizar el scroll en anchors de href ////////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

////// camiar nav a blanco en scroll ////////

var nav = document.querySelector("header");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
    nav.classList.add("scroll");
  }else{
    nav.classList.remove("scroll");
  }
};

////// abrir/cerrar boton hamburguesa mobile ////////

var navToggle = document.getElementById("nav-toggle");
var navList = document.getElementById("nav-list");
var navListItem = document.getElementsByTagName("li");
var body = document.body;
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");

var navToggleClicks = 1;

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

function myFunction(mediaQueries){ 
  
  if(mediaQueries.matches){
    navToggle.addEventListener("click", OpenClose);
    for (var i = 0; i < navListItem.length; i++) {
      navListItem[i].addEventListener('click', OpenClose);
    }
  }

}

function OpenClose(){
    navToggleClicks++
    if(navToggleClicks % 2 == 0){
        openNav();
    }else{
        closeNav();
    }
}

function openNav(){
    navList.style.transform = "translateY(0)";
    lineOne.style.transform = "rotate(-45deg) scale(0.8)";
    lineTwo.style.opacity = "0";
    lineThree.style.transform = "rotate(45deg) scale(0.8) translate(0.1vw, 0.4vw)";
    lineThree.style.width = "8vw";
    setTimeout(function() {
        for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.opacity = "1";
        }
    }, 300);
    setTimeout(function() {
        for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.transform = "translateY(0)";
        }
    }, 350);
}

function closeNav(){
    navList.style.transform = "translateY(-100vh)";
    lineOne.style.transform = "rotate(0) scale(1)";
    lineTwo.style.opacity = "1";
    lineThree.style.transform = "rotate(0) scale(1) translate(0, 0)";
    lineThree.style.width = "4vw";
    for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.opacity = "0";
        navListItem[i].style.transform = "translateY(-2rem)";
    }
}
