AOS.init();

let colapseButton = document.getElementById('colapseButton');
let navbarColapse = document.getElementById('navbarColapse');

colapseButton.addEventListener('click', function() {
    colapseButton.classList.toggle('click');
    navbarColapse.classList.toggle('show');
});

let play = document.querySelectorAll('.play');
let pause = document.querySelectorAll('.pause');
let video_play_control = document.querySelectorAll('.video_play_control');

video_play_control.forEach(function(element) {
    element.addEventListener('click', function() {
        element.classList.toggle('played');
    });
});
play.forEach(element => {
    element.addEventListener('click', function(e) {
        let video = document.querySelector(`${e.target.parentElement.getAttribute('href')}`);
        video.play();
    });
});
pause.forEach(element => {
    element.addEventListener('click', function(e) {
        let video = document.querySelector(`${e.target.parentElement.getAttribute('href')}`);
        video.pause();
    });
});

let languageId = document.getElementById('languageId');
let lang_values = document.querySelectorAll('.lang_values');
let langVal = document.getElementById('langVal');

langVal.innerHTML = lang_values[0].innerHTML;
languageId.addEventListener('click', function() {
    languageId.classList.toggle('opened');
});
lang_values.forEach(element => {
    element.addEventListener('click', function(e) {
        langVal.innerHTML = e.target.innerHTML;
    });
})
let my_dropdowns = document.querySelectorAll('.my_dropdowns');
my_dropdowns.forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('opened');
    });
});
let card_sum_buttons = document.querySelectorAll('.card_sum_buttons');
card_sum_buttons.forEach(element => {
    element.addEventListener('click', function() {
        card_sum_buttons.forEach(element => {
            element.classList.remove('active');
        });
        this.classList.add('active');
    });
});

let delayu_dobro = document.querySelectorAll('.delayu_dobro');
let actions = document.getElementById('actions');
let krestikFix = document.getElementById('krestikFix');
let krestik = document.querySelectorAll('.krestik'); 
let fixCard1 = document.getElementById('fixCard1');
let myfix_container = document.querySelectorAll('.myfix_container');
let kupitTurSum = document.getElementById('kupitTurSum');
let buyYurDate = document.getElementById('buyYurDate');
let delayDobroCard = document.getElementById('delayDobroCard');

delayu_dobro.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        actions.classList.add('fix_on');
        delayDobroCard.classList.add('card_fix');
        document.body.style.overflow = 'hidden';
    });
});
krestik.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        actions.classList.remove('fix_on');
        document.body.style.overflow = 'auto';
        myfix_container.forEach(element => {
            element.classList.remove('card_fix');
        });
    });
});
// moted a tag href event
buyYurDate.addEventListener('click', function(e) {
    e.preventDefault();
    actions.classList.add('fix_on');
    fixCard1.classList.add('card_fix');
    document.body.style.overflow = 'hidden';
});
kupitTurSum.addEventListener('click', function(e) {
    e.preventDefault();
    actions.classList.add('fix_on');
    fixCard2.classList.add('card_fix');
    document.body.style.overflow = 'hidden';
});