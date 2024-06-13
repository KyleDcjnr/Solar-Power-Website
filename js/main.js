var menuBtnOpen = document.getElementById("menuBtn");

var menuBtnClose = document.getElementById("menuBtnClose");

var modalMenu = document.getElementById("modalBox");

var navigation = document.getElementById("navBar");

var bodyOfContent = document.getElementById("container");

var contain = document.getElementById("container");

var bodyOfContent = document.getElementById("body");

var modalNavigation = document.getElementsByClassName("modalNav");

var menuCards = document.getElementsByClassName("box");


menuBtnOpen.onclick = function(){
    modalMenu.style.display = "flex";
    contain.style.display = "none";
}


menuBtnClose.onclick = function(){
    modalMenu.style.display = "none"
    contain.style.display = "block";
}


for (var i = 0; i < modalNavigation.length; i++) {
    modalNavigation[i].onclick = function() {
        modalMenu.style.display = "none";
        contain.style.display = "block"
    }
};



// for the hover effect on the short menu on the about us section
for (var i = 0; i < menuCards.length; i++) {
// hover in
    menuCards[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgba(83, 83, 83, 0.1)";

        var cardIcons = this.getElementsByClassName("icon");
        for (var j = 0; j < cardIcons.length; j++) {
            cardIcons[j].style.backgroundColor = "#268EDD";
        }
        var pathFill = this.getElementsByClassName("path");
        for (var l = 0; l < pathFill.length; l++) {
            pathFill[l].style.cssText = "fill: #000000";
        }
    });
// hover out
    menuCards[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "";

        var cardIcons = this.getElementsByClassName("icon");
        for (var j = 0; j < cardIcons.length; j++) {
            cardIcons[j].style.backgroundColor = "";
        }
        var pathFill = this.getElementsByClassName("path");
        for (var l = 0; l < pathFill.length; l++) {
            pathFill[l].style.cssText = "";
        }
    });
};


// for the animated effect on smaller screen
const smallCards = document.querySelectorAll('.cards');
const smallCardImgContainer = document.querySelector('.serviceCardImg');
let currentSmallCard = 0;
const displayRange = 915;
const smallCardImg = [
    'url(../assets/technician.jpeg)',
    'url(../assets/team.jpeg)',
    'url(../assets/femaleengineer.png)',
]

function updateCardsDisplay() {
    if (window.innerWidth <= displayRange) {
        smallCards.forEach((cards, index) => {
            cards.classList.add('hidden');
            if (index === currentSmallCard) {
                cards.classList.remove('hidden')
            }
        });
        smallCardImgContainer.style.backgroundImage = smallCardImg[currentSmallCard];
        // move to next card
        currentSmallCard = (currentSmallCard + 1) % smallCards.length;
    } else{
    // if the width is above the range, show all cards
    smallCards.forEach(cards => {
        cards.classList.remove('hidden');
    });
    smallCardImgContainer.style.backgroundImage = smallCardImg[0];
  }
}

function checkWidthAndUpdate(){
    updateCardsDisplay();
}

// change card properties every 2 seconds
setInterval(checkWidthAndUpdate, 2000);

// update display on window resize
window.addEventListener('resize', updateCardsDisplay);

// initial check
updateCardsDisplay();

// for the animated effect on the service cards on bigger screen
const servCards = document.querySelectorAll(".cards");
const bigCardImgContainer = document.querySelector('.serviceCardImg');
let currentCard = 0;
const bigDisplayRange = 916;
const bigCardImg = [
    'url(../assets/technician.jpeg)',
    'url(../assets/team.jpeg)',
    'url(../assets/femaleengineer.png)',
]


function updateBigCards() {
    if (window.innerWidth >= bigDisplayRange) {
    servCards.forEach((cards, index) => {
        cards.style.cssText = 'border-top: 3px solid; color: rgba(83, 83, 83, 0.5);border-color:  rgba(83, 83, 83, 0.5);';
        if (index === currentCard) {
            servCards[currentCard].style.cssText = 'border-top: 7px solid; color: #000A44 ; border-color: #268EDD;'
            };
    });
    
    bigCardImgContainer.style.backgroundImage = bigCardImg[currentCard];

    currentCard = (currentCard + 1) % servCards.length;
} else{
    servCards.forEach(cards => {
        cards.style.cssText = 'border-top: 2px solid; color: #000A44 ; border-color: #268EDD;'
    })
}
}

function widthUpdate(){
    updateBigCards();
}

setInterval(widthUpdate, 2000);

window.addEventListener('resize', updateBigCards);

// initial check
updateBigCards();



// transistion effects for the product section
const smallDisplaycard = document.querySelectorAll('.cardDetails');
let currentProductCard = 0;
const smallScreenLimit = 915;

function updateScreenDisplay() {
    if (window.innerWidth <= smallScreenLimit) {
        smallDisplaycard.forEach((cardDetails, index) => {
            cardDetails.classList.add('hidden');
            if (index === currentProductCard) {
                cardDetails.classList.remove('hidden')
            }
        });
        currentProductCard = (currentProductCard + 1) % smallDisplaycard.length;
    } else{
        smallDisplaycard.forEach(cardDetails => {
            cardDetails.classList.remove('hidden');
        });
    }
}

function checkDisplayDimension(){
    updateScreenDisplay();
}

setInterval(checkDisplayDimension, 2000);

window.addEventListener('resize', updateScreenDisplay);

updateScreenDisplay();
