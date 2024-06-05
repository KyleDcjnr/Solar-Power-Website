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

// display contant us pop-up
document.addEventListener('DOMContentLoaded', () => {
    const popUpTrigger = document.querySelectorAll('.buttin');
    const popUp = document.querySelector('#contactUs');
    const modalBoxDisplay = document.querySelector('#modalBox');
    const containBox = document.querySelector('#container');
    const popUpClose = document.querySelector('.popUpClose')

    popUpTrigger.forEach( button => {
        button.addEventListener('click', () =>{
            popUp.style.display = "flex";
            modalBoxDisplay.style.display = "none";
            containBox.style.display = "none";

        });
    });
    
    popUpClose.addEventListener('click', () => {
        popUp.style.display = 'none';
        containBox.style.display = "block";
    });

    window.addEventListener('click', (event) => {
        if (event.target === popUp) {
            popUp.style.display = 'none';
            containBox.style.display = "block";

        }
    });


})

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
    'url(../assets/engineer.jpeg)',
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
    'url(../assets/engineer.jpeg)',
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
        cards.style.cssText = 'border-top: 7px solid; color: #000A44 ; border-color: #268EDD;'
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



// Dynamic carousel design for the products section



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




// slider effect for completed installation section
document.addEventListener('DOMContentLoaded', () => {
    const sliderInner = document.querySelector('.slider');

    const items = [
        { imgSrc: '../assets/1.jpeg', text: 'Installation of a 10kva Solar system at St. THERESA CATHOLIC CHURCH, Ikota, Lekki, Lagos State, Nigeria'},
        { imgSrc: '../assets/2.jpeg', text: 'Installation of a 5kva Solar system in Ikorodu, Lagos State, Nigeria'},
        { imgSrc: '../assets/3.jpeg', text: 'Installation of a 25kva Solar system at HFCC, Festac. Lagos State, Nigeria'},
        { imgSrc: '../assets/4.jpeg', text: 'Installation of a 10kva Solar system at St. THERESA CATHOLIC CHURCH, Ikota, Lekki, Lagos State, Nigeria'},
        { imgSrc: '../assets/5.jpeg', text: 'Installation of a 5kva Solar system in Ikorodu, Lagos State, Nigeria'},
        { imgSrc: '../assets/6.jpeg', text: 'Installation of a 25kva Solar system at HFCC, Festac. Lagos State, Nigeria'},
    ];

    items.forEach(item => {
        const sliderItem = document.createElement('div');
        sliderItem.classList.add('sliderItems');

        const sliderImage = document.createElement('div');
        sliderImage.classList.add('sliderImg');
        sliderImage.style.background = `url(${item.imgSrc}) center/contain no-repeat`;

        const sliderText = document.createElement('h3');
        sliderText.classList.add('sliderTxt');
        sliderText.textContent = item.text;

        sliderItem.appendChild(sliderImage);
        sliderItem.appendChild(sliderText);
        sliderInner.appendChild(sliderItem);
    });
    const leftArrow = document.querySelector('.slideLeft');
    const rightArrow = document.querySelector('.slideRight');

    let sliderIndex = 0;
    const totalItems = items.length;
    let autoSlideInterval;

    function updateSlider(){
        sliderInner.style.transform =`translateX(-${sliderIndex * 120}%)`;
        updateArrows();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (sliderIndex < totalItems -1) {
                sliderIndex++;
            }
            else {
                sliderIndex = 0;
            }
            updateSlider();
        }, 3000); // Change slide every 3 seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    function updateArrows() {
        if (sliderIndex === 0) {
            leftArrow.classList.add('disabled');
        } else {
            leftArrow.classList.remove('disabled');
        }

        if (sliderIndex === totalItems - 1) {
            rightArrow.classList.add('disabled');
        } else {
            rightArrow.classList.remove('disabled');
        }
    }


    leftArrow.addEventListener('click', () => {
        if (sliderIndex > 0) {
            sliderIndex--;
        }
        //  else {
        //     sliderIndex = totalItems - 1;
        // }
        updateSlider();
        resetAutoSlide();
    });

    rightArrow.addEventListener('click', () => {
        if (sliderIndex < totalItems - 1) {
            sliderIndex++;
        } 
        // else {
        //     sliderIndex = 0;
        // }
        updateSlider();
        resetAutoSlide();
    });
    updateArrows();
    startAutoSlide();

});


// slider effect for gallery section
document.addEventListener('DOMContentLoaded', () => {
    const galleryIn = document.querySelector('.galleryInner');

    const images = [
        { imgSrc: '../assets/training.jpeg' },
        { imgSrc: '../assets/group.jpeg' },
    ];

    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('galleryItems');

        const galleryImage = document.createElement('div');
        galleryImage.classList.add('galleryImg');
        galleryImage.style.background = `url(${image.imgSrc}) center/contain no-repeat`;

        galleryItem.appendChild(galleryImage);
        galleryIn.appendChild(galleryItem);
    });

    const leftCircle = document.querySelector('.c-left');
    const rightCircle = document.querySelector('.c-right');

    let galleryIndex = 0;
    const totalImages = images.length;
    let autoGlideInterval;

    function updateGlider(){
        galleryIn.style.transform =`translateX(-${galleryIndex * 120}%)`;
        updateCircle();
    }

    function startAutoGlide() {
        autoGlideInterval = setInterval(() => {
            if (galleryIndex < totalImages - 1) {
                galleryIndex++;
            }
            else{
                galleryIndex = 0;
            }
            updateGlider();
        }, 3000);
    }

    function updateCircle() {
        if (galleryIndex === 0) {
            leftCircle.classList.add('active');
        } else {
            leftCircle.classList.remove('active');
        }

        if (galleryIndex === totalImages -1) {
            rightCircle.classList.add('active');
        } else {
            rightCircle.classList.remove('active');
        }
    }

    updateGlider(); // Initialize carousel position
    startAutoGlide();
}); 