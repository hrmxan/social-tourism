AOS.init();

let colapseButton = document.getElementById('colapseButton');
let navbarColapse = document.getElementById('navbarColapse');

try {
    colapseButton.addEventListener('click', function () {
        colapseButton.classList.toggle('click');
        navbarColapse.classList.toggle('show');
    });
} catch (e) {
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
} catch (error) {
    console.log(error);
}

try {
    play.forEach(element => {
        element.addEventListener('click', function (e) {
            let video = document.querySelector(`${e.target.parentElement.getAttribute('href')}`);
            video.play();
        });
    });
} catch (e) {
    console.log(e);
}

try {
    pause.forEach(element => {
        element.addEventListener('click', function (e) {
            let video = document.querySelector(`${e.target.parentElement.getAttribute('href')}`);
            video.pause();
        });
    });
} catch (e) {
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
} catch (e) {
    console.log(e);
}

try {
    lang_values.forEach(element => {
        element.addEventListener('click', function (e) {
            langVal.innerHTML = e.target.innerHTML;
        });
    })
} catch (e) {
    console.log(e);
}

let my_dropdowns = document.querySelectorAll('.my_dropdowns');

try {
    my_dropdowns.forEach(element => {
        element.addEventListener('click', function (e) {
            e.target.parentElement.classList.toggle('opened')
        });
    });
} catch (e) {
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
} catch (e) {
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

function action_on() {
    actions.classList.add('fix_on');
    document.body.style.overflow = 'hidden';
}

function action_off() {
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
let videoCNey;
let videoCNeyBody;
let my_carousel_section = document.querySelectorAll('.my_carousel_section');
let my_carousel_item_video = document.querySelectorAll('.my_carousel_item_video');

function ClearVideo() {
    my_carousel_item_video.forEach(element => {
        element.pause();
        element.currentTime = 0;
        my_carousel_section.forEach(element => {
            element.classList.remove('video_play');
        });
    });
}

try {
    play_buttos_c_ney.forEach(element => {
        element.addEventListener('click', function (e) {
            element.preventDefault;
            ClearVideo();
            my_carousel_section.forEach(e => {
                if (e.getAttribute('data-hrm-play') == element.getAttribute('data-hrm-play')) {
                    e.classList.add('video_play')
                }
            });
            my_carousel_item_video.forEach(e => {
                if (e.getAttribute('data-hrm-play') == element.getAttribute('data-hrm-play')) {
                    setTimeout(() => {
                        e.play();
                    }, 500);
                }
            });
        });
    });
} catch (e) {
    console.log(e);
}
let stop_video_play = document.querySelectorAll('.stop_video_play');


try {
    stop_video_play.forEach(element => {
        element.addEventListener('click', function (e) {
            ClearVideo();
        });
    });
} catch (e) {
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


// masks

try {
    let phone_number_input = document.querySelectorAll('.phone_number_input');

    phone_number_input.forEach(element => {
        let maskOptions = {
            phone: {
                mask: "+998 (00) 000 00 00",
                lazy: false,
                placeholderChar: "-",
            },
        };
        if (element) {
            IMask(element, maskOptions.phone);
        }
    });


    let card_number_mask = document.querySelectorAll('.card_number_mask');
    card_number_mask.forEach(element => {
        let maskOptions = {
            card: {
                mask: "0000-0000-0000-0000",
                lazy: true,
                placeholderChar: " _ ",
            },
        };
        if (element) {
            IMask(element, maskOptions.card)
        }
    });

    let min_max_mask = document.querySelectorAll('.min_max_mask');

    min_max_mask.forEach(element => {
        let maskOptions = {
            min_max: {
                mask: Number,
                min: 5000,
                max: 4500000,
                thousandsSeparator: '  '
            },
        };
        if (element) {
            IMask(element, maskOptions.min_max);
        }
    });
} catch (e) {
    console.log(e);
}

// let tel = document.getElementById("selector");
// let maskOptions = {
//     phone: {
//         mask: "+{998}(00)000-00-00",
//         lazy: false,
//         placeholderChar: "-",
//     },
// };
// if (tel) {
//     let mask = IMask(tel, maskOptions.phone);
// }



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

// carousel
try {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} catch (e) {
    console.log(e);
}
try {
    let car_sum = document.querySelectorAll('.car_sum');
    let sums = document.querySelectorAll('.sums');
    let line = document.querySelectorAll('.line');
    car_sum.forEach(element => {
        element.addEventListener('input', function (e) {
            let max;
            let min;
            let prots;
            sums.forEach(e => {
                if (e.getAttribute('data-sum') == element.getAttribute('data-sum')) {
                    e.childNodes[3].childNodes[1].innerHTML = element.value;
                    min = parseInt(e.childNodes[3].childNodes[1].innerHTML.replaceAll(' ', ''));
                    max = parseInt(e.childNodes[5].childNodes[1].innerHTML.replaceAll(' ', ''));
                }
            });
            line.forEach(e => {
                if (e.getAttribute('data-sum') == element.getAttribute('data-sum')) {
                    prots = (min * 100) / max;
                    e.childNodes[1].style.width = prots + '%';
                }
            });
        });
    });
} catch (e) {
    console.log(e);
}