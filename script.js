const dropBtn = document.querySelector('#drop-btn');
const dropContent = document.querySelector('#drop1');

const btn2 = document.querySelector('#btn2');
const drop2 = document.querySelector('#drop2');

function createDropDown(btn, content) {
    btn.addEventListener('click', () => {
        content.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target != btn) {
            content.classList.remove('show');
        }
    });
}

// float menu
const floatBtn = document.querySelector('.float-btn');
const floatMenu = document.querySelector('.float-menu');

createDropDown(dropBtn, dropContent);
createDropDown(btn2, drop2);
createDropDown(floatBtn, floatMenu);

// image slider

let activeSlide = 0;
let intervalID;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, i) => dot.addEventListener('click', () => {
    showSlide(i);
    resetTimer();
}));

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('show'));
    slides[index].classList.add('show');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    activeSlide = index;
}

function showNextSlide() {
    activeSlide++;
    if (activeSlide > 4) {
        activeSlide = 0;
    }
    showSlide(activeSlide);
}

function showPrevSlide() {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = 4;
    }
    showSlide(activeSlide);
}

function resetTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(showNextSlide, 5000);
}

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

prevBtn.addEventListener('click', () => {
    showPrevSlide();
    resetTimer();
});
nextBtn.addEventListener('click', () => {
    showNextSlide();
    resetTimer();
});

showSlide(0);

intervalID = setInterval(showNextSlide, 5000);