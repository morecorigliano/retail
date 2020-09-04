var navToggle = document.getElementById("nav-toggle");
var nav = document.getElementById("nav-panel");
var navListItem = document.querySelector("li");
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");
var accountToggle = document.getElementById("account-toggle");
var userOpt = document.getElementById("user");

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

function myFunction(mediaQueries){ 
  
  if(mediaQueries.matches){
    navToggle.addEventListener("click", OpenClose);
    accountToggle.addEventListener("click", OpenCloseAccount)
    for (var i = 0; i < navListItem.length; i++) {
      navListItem[i].addEventListener('click', OpenClose);
    }
  }

}

////// abrir/cerrar boton hamburguesa mobile ////////

var navToggleClicks = 1;

function OpenClose(){
    navToggleClicks++;
    if(navToggleClicks % 2 == 0){
        openNav();
    }else{
        closeNav();
    }
}

function openNav(){
    nav.style.transform = "translateX(0)";
    lineOne.style.transform = "rotate(45deg) scale(0.8)";
    lineTwo.style.opacity = "0";
    lineThree.style.transform = "rotate(-45deg) scale(0.8) translate(0.1vw, 0.4vw)";
}

function closeNav(){
    nav.style.transform = "translateX(-45vw)";
    lineOne.style.transform = "rotate(0) scale(1)";
    lineTwo.style.opacity = "1";
    lineThree.style.transform = "rotate(0) scale(1) translate(0, 0)";
}

////// abrir/cerrar opciones cuenta ////////

var accountToggleClicks = 1;

function OpenCloseAccount(){
  accountToggleClicks++
  if(accountToggleClicks % 2 == 0){
      openAccountOpt();
  }else{
      closeAccountOpt();
  }
}

function openAccountOpt(){
  userOpt.style.transform = "translateY(0)";
}

function closeAccountOpt(){
  userOpt.style.transform = "translateY(-100vh)";
}