AOS.init();

let colapseButton = document.getElementById('colapseButton');
let navbarColapse = document.getElementById('navbarColapse');

try {
    colapseButton.addEventListener('click', function () {
        colapseButton.classList.toggle('click');
        navbarColapse.classList.toggle('show');
    });
}
catch (e) {
    console.log(e);
}

let play = document.querySelectorAll('.play');
let pause = document.querySelectorAll('.pause');
let video_play_control = document.querySelectorAll('.video_play_control');

try {
    video_play_control.forEach(function (element) {
        element.addEventListener('click', function () {
            element.classList.toggle('played');
        });
    });
}
catch (error) {
    console.log(error);
}

try {
    play.forEach(element => {
        element.addEventListener('click', function (e) {
            let video = document.querySelector(`${e.target.parentElement.getAttribute('href')}`);
            video.play();
        });
    });
}
catch (e) {
    console.log(e);
}

try {
    pause.forEach(element => {
        element.addEventListener('click', function (e) {
            let video = document.querySelector(`${e.target.parentElement.getAttribute('href')}`);
            video.pause();
        });
    });
}
catch (e) {
    console.log(e);
}

let languageId = document.getElementById('languageId');
let lang_values = document.querySelectorAll('.lang_values');
let langVal = document.getElementById('langVal');

langVal.innerHTML = lang_values[0].innerHTML;
try {
    languageId.addEventListener('click', function () {
        languageId.classList.toggle('opened');
    });
}
catch (e) {
    console.log(e);
}

try {
    lang_values.forEach(element => {
        element.addEventListener('click', function (e) {
            langVal.innerHTML = e.target.innerHTML;
        });
    })
}
catch (e) {
    console.log(e);
}

let my_dropdowns = document.querySelectorAll('.my_dropdowns');

try {
    my_dropdowns.forEach(element => {
        element.addEventListener('click', function (e) {
            e.target.parentElement.classList.toggle('opened')
        });
    });
}
catch (e) {
    console.log(e);
}

let card_sum_buttons = document.querySelectorAll('.card_sum_buttons');

try {
    card_sum_buttons.forEach(element => {
        element.addEventListener('click', function () {
            card_sum_buttons.forEach(element => {
                element.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}
catch (e) {
    console.log(e);
}

let delayu_dobro = document.querySelectorAll('.delayu_dobro');
let actions = document.getElementById('actions');
let krestikFix = document.getElementById('krestikFix');
let krestik = document.querySelectorAll('.krestik');
let fixCard1 = document.getElementById('fixCard1');
let myfix_container = document.querySelectorAll('.myfix_container');
let kupitTurSum = document.getElementById('kupitTurSum');
let buyYurDate = document.getElementById('buyYurDate');
let delayDobroCard = document.getElementById('delayDobroCard');

function action_on () {
    actions.classList.add('fix_on');
    document.body.style.overflow = 'hidden';
}

function action_off () {
    actions.classList.remove('fix_on');
    document.body.style.overflow = 'auto';
}

try {
    delayu_dobro.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            action_on();
            delayDobroCard.classList.add('card_fix');
        });
    });
} catch (e) {
    console.log(e);
}


try {
    krestik.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            action_off();
            myfix_container.forEach(element => {
                element.classList.remove('card_fix');
            });
        });
    });
} catch (e) {
    console.log(e);
}
// moted a tag href event
try {
    buyYurDate.addEventListener('click', function (e) {
        e.preventDefault();
        action_on();
        fixCard1.classList.add('card_fix');
    });
} catch (e) {
    console.log(e);
}
try {
    kupitTurSum.addEventListener('click', function (e) {
        e.preventDefault();
        action_on();
        fixCard2.classList.add('card_fix');
    });
} catch (e) {
    console.log(e);
}

let mute_buttons = document.querySelectorAll('.mute_buttons');
try {
    mute_buttons.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
} catch (e) {
    console.log(e);
}

let play_buttos_c_ney = document.querySelectorAll('.play_buttos_c_ney');
let videoCNey = document.getElementById('videoCNey');
let videoCNeyBody = document.getElementById('videoCNeyBody');

try {
    play_buttos_c_ney.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            setTimeout(function () {
                videoCNey.play();
            }, 500);

            videoCNeyBody.classList.add('video_play');
        });
    });
} catch (e) {
    console.log(e);
}
let stop_video_play = document.querySelectorAll('.stop_video_play');

try {
    stop_video_play.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            videoCNey.pause();
            videoCNeyBody.classList.remove('video_play');
        });
    });
}
catch (e) {
    console.log(e);
}
let my_selects = document.querySelectorAll('.my_selects');
try {
    my_selects.forEach(element => {
        element.addEventListener('click', function (e) {
            element.classList.toggle('show');
        });
    });
} catch (e) {
    console.log(e);
}
let my_select_items = document.querySelectorAll('.my_select_items');
try {
    my_select_items.forEach(element => {
        element.addEventListener('click', function (e) {
            let selectd_item = e.target.innerHTML;
            e.target.offsetParent.offsetParent.childNodes[1].innerHTML = selectd_item;
        });
    });
} catch (e) {
    console.log(e);
}
let fileSend = document.getElementById('fileSend');
let file_send_title;

try {
    fileSend.addEventListener('change', function (e) {
        file_send_title = e.target.parentElement.childNodes[1].childNodes[3];
        if (e.target.files.length > 0) {
            file_send_title.innerHTML = e.target.files[0].name;
        }
    });
} catch (e) {
    console.log(e);
}

let phone_number_input = document.querySelectorAll('.phone_number_input');
// make inpur phone number mask '+998 (**) ***-**-**'
let input_in = ['+998 ('];
try {
    phone_number_input.forEach(element => {
        element.addEventListener('keyup',  e => {
            e.target.value = '';
            let inner_key = parseInt(e.key);
            if (inner_key >= 0 && inner_key <= 9) {
                input_in.push(Number(e.key));
                if (input_in.length > 13) {
                    input_in.pop();
                }
                if (input_in.length === 3) {
                    input_in.push(') ');
                }
                if (input_in.length === 7) {
                    input_in.push(' ');
                }
                if (input_in.length === 10) {
                    input_in.push(' ');
                }
            }
            if (e.key === 'Backspace' && input_in.length > 1) {
                input_in.pop();
            }
            input_in.forEach(element => {
                e.target.value += element;
            });
        });
    });
} catch (e) {
    console.log(e);
}
let galeryFix = document.getElementById('galeryFix');
let galeryClose = document.getElementById('galeryClose');
let galeryFixImg = document.getElementById('galeryFixImg');
let img_link_card = document.querySelectorAll('.img_link_card');

try {
    galeryClose.addEventListener('click', function (e) {
        e.preventDefault();
        galeryFix.classList.remove('galery_on');
        action_off();
    });
    img_link_card.forEach(element => {
        element.addEventListener('click', function (e) {
            // e.target.parentElement.childNodes[1].getAttribute('src')
            
            console.log(galeryFixImg.setAttribute('src', e.target.parentElement.childNodes[1].getAttribute('src')));
            
            action_on();
            galeryFix.classList.add('galery_on');
        });
    });
} catch (e) {
    console.log(e);
}
