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

let tours_cards = document.querySelectorAll('.tours_cards');
let actions = document.getElementById('actions');
let krestikFix = document.getElementById('krestikFix');
tours_cards.forEach(element => {
    element.addEventListener('click', function() {
        actions.classList.add('fix_on');
        document.body.style.overflow = 'hidden';
    });
});
krestikFix.addEventListener('click', function(e) {
    actions.classList.remove('fix_on');
    document.body.style.overflow = 'auto';
});
let buy_tur_actions = document.querySelectorAll('.buy_tur_actions');
buy_tur_actions.forEach(element => {
    element.addEventListener('click', function() {
        actions.classList.add('fix_on');
        document.body.style.overflow = 'hidden';
    });
});