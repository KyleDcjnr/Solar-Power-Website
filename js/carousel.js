const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselBtn--right');
const prevButton = document.querySelector('.carouselBtn--left');
const dotNavigate = document.querySelector('.carousel__nav');
const dots = Array.from(dotNavigate.children);


const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentTab, targetTab) =>{
    track.style.transform = 'translateX(-' + targetTab.style.left + ')'; 
    currentTab.classList.remove('current-slide');
    targetTab.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};
const hideShowArrows = (slides, prevButton, nextButton, targetIndex ) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden')
    }
}

// click action left
prevButton.addEventListener('click', e => {
    const currentTab = track.querySelector('.current-slide');
    const prevTab = currentTab.previousElementSibling;
    const currentDot = dotNavigate.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevTab);
    moveToSlide(track, currentTab, prevTab); 
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex );
});

// click action right
nextButton.addEventListener('click', e => {
    const currentTab = track.querySelector('.current-slide');
    const nextTab = currentTab.nextElementSibling;
    const currentDot = dotNavigate.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextTab);

    moveToSlide(track, currentTab, nextTab);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex );
});


// carousel indication based on click action
dotNavigate.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentTab = track.querySelector('.current-slide');
    const currentDot = dotNavigate.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetTab = slides[targetIndex];

    moveToSlide(track, currentTab, targetTab);

    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex );
});

// testimonials
const testimonialTrack = document.querySelector('.tcarousel__track');
const testimonialSlides = Array.from(testimonialTrack.children);
const testimonialNextBtn = document.querySelector('.tcarouselBtn--right');
const testimonialPrevBtn = document.querySelector('.tcarouselBtn--left');
const testimonialDotNavigate = document.querySelector('.tcarousel__nav');
const testimonialDots = Array.from(testimonialDotNavigate.children);

const testimonialWidth = testimonialSlides[0].getBoundingClientRect().width;

const setTestimonialPosition = (testimonialSlide, index) => {
    testimonialSlide.style.left = testimonialWidth * index + 'px';
};
testimonialSlides.forEach(setTestimonialPosition);

const moveToTestimonial = (testimonialTrack, currentTestimonial, targetTestimonial) => {
    testimonialTrack.style.transform = 'translateX(-' + targetTestimonial.style.left + ')';
    currentTestimonial.classList.remove('tcurrent-slide');
    targetTestimonial.classList.add('tcurrent-slide');
};

const updateTestimonialDots = (currentTestimonialDot, targetTestimonialDot) => {
    currentTestimonialDot.classList.remove('tcurrent-slide');
    targetTestimonialDot.classList.add('tcurrent-slide');    
};

const testimonialHideShowArrows = (testimonialSlides, testimonialPrevBtn, testimonialNextBtn, testimonialTargetIndex) => {
    if (testimonialTargetIndex === 0) {
        testimonialPrevBtn.classList.add('tis-hidden');
        testimonialNextBtn.classList.remove('tis-hidden');
    } else if (testimonialTargetIndex === testimonialSlides.length - 1) {
        testimonialPrevBtn.classList.remove('tis-hidden');
        testimonialNextBtn.classList.add('tis-hidden');
    } else {
        testimonialPrevBtn.classList.remove('tis-hidden');
        testimonialNextBtn.classList.remove('tis-hidden');
    }
};

testimonialPrevBtn. addEventListener('click', e => {
    const currentTestimonial = testimonialTrack.querySelector('.tcurrent-slide');
    const prevTestimonial = currentTestimonial.previousElementSibling;
    const currentTestimonialDot = testimonialDotNavigate.querySelector('.tcurrent-slide');
    const prevTestimonialDot = currentTestimonialDot.previousElementSibling;
    const prevTestimonialIndex = testimonialSlides.findIndex(testimonialSlide => testimonialSlide === prevTestimonial);
    moveToTestimonial(testimonialTrack, currentTestimonial, prevTestimonial);
    updateTestimonialDots(currentTestimonialDot, prevTestimonialDot);
    testimonialHideShowArrows(testimonialSlides, testimonialPrevBtn, testimonialNextBtn, prevTestimonialIndex ); T
});

testimonialNextBtn. addEventListener('click', e => {
    const currentTestimonial = testimonialTrack.querySelector('.tcurrent-slide');
    const nextTestimonial = currentTestimonial.nextElementSibling;
    const currentTestimonialDot = testimonialDotNavigate.querySelector('.tcurrent-slide');
    const nextTestimonialDot = currentTestimonialDot.nextElementSibling;
    const nextTestimonialIndex = testimonialSlides.findIndex(testimonialSlide => testimonialSlide === nextTestimonial);
    moveToTestimonial(testimonialTrack, currentTestimonial, nextTestimonial);
    updateTestimonialDots(currentTestimonialDot, nextTestimonialDot);
    testimonialHideShowArrows(testimonialSlides, testimonialPrevBtn, testimonialNextBtn, nextTestimonialIndex);  
});

testimonialDotNavigate.addEventListener('click', e => {
    const targetTestimonialDot = e.target.closest('button');
    if (!targetTestimonialDot) return;
    
     const currentTestimonial = testimonialTrack.querySelector('.tcurrent-slide');
     const currentTestimonialDot = testimonialDotNavigate.querySelector('.tcurrent-slide');
     const testimonialTargetIndex  = testimonialDots.findIndex(testimonialDot => testimonialDot === targetTestimonialDot);
     const targetTestimonial = testimonialSlides[testimonialTargetIndex];

     moveToTestimonial(testimonialTrack, currentTestimonial, targetTestimonial);

     updateTestimonialDots(currentTestimonialDot, targetTestimonialDot);
     testimonialHideShowArrows(testimonialSlides, testimonialPrevBtn, testimonialNextBtn, testimonialTargetIndex);
});