

let buttons = document.getElementsByTagName("button"); 

for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function(event) {
        buttonsControl(event.target);
        counterClick(event.target);
   }, false);
}

let counterA = 20;
let counterB = 20;

let clickCounterA = document.querySelector('.counter-one');
let clickCounterB = document.querySelector('.counter-two');

let NumberA = document.querySelector('.number-one');
let oneCircleA = document.querySelector('.circle-one');
let twoCircleA = document.querySelector('.circle-one-second');
let treCircleA = document.querySelector('.circle-one-third');

let NumberB = document.querySelector('.number-two');
let oneCircleB = document.querySelector('.circle-two');
let twoCircleB = document.querySelector('.circle-two-second');
let treCircleB = document.querySelector('.circle-two-third');

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

function buttonsControl(button) {
    switch (button.className) {
        case 'plus-one':
            counterA++;
            NumberA.textContent = counterA;
            soundClick();
            animateClickA();
            color1.style.backgroundColor = getRandomRolor();
            break;
        case 'minus-one':
            counterA--;
            NumberA.textContent = counterA;
            soundClick();
            animateClickA();
            color1.style.backgroundColor = getRandomRolor();
            break;
        case 'plus-two':
            counterB++;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            color2.style.backgroundColor =  randDarkColor();
            break;
        case 'minus-two':
            counterB--;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            color2.style.backgroundColor = randDarkColor();
            break;
    };
}

let counterClickA = 0;

function counterClick(button) {
    clickCounterA.classList.remove('invisible');

    console.log(counterClickA);

    if (button.className == 'plus-one' || button.className == 'plus-two') {
        counterClickA++;
        clickCounterA.textContent = counterClickA;
    } 
    
    if (button.className == 'minus-one' || button.className == 'minus-two') {
        counterClickA--;
        clickCounterA.textContent = counterClickA;
    }    
}

function soundClick() {
    var audio = new Audio('wav/soft-click.wav');
    audio.play();
}

function animateClickA() {
        oneCircleA.classList.add('animate-circle');
        twoCircleA.classList.add('animate-circle-two');
        treCircleA.classList.add('animate-circle-two');

        elements = document.querySelectorAll('.anima');
        
            for (let item of elements) {
                item.addEventListener('animationend', function() {
                    item.classList.remove('animate-circle');
                    item.classList.remove('animate-circle-two');
                    item.classList.remove('animate-circle-two');
                }); 
            }
}

function animateClickB() {
        oneCircleB.classList.add('animate-circle');
        twoCircleB.classList.add('animate-circle-two');
        treCircleB.classList.add('animate-circle-two');

        elements = document.querySelectorAll('.anima');
        
            for (let item of elements) {
                item.addEventListener('animationend', function() {
                    item.classList.remove('animate-circle');
                    item.classList.remove('animate-circle-two');
                    item.classList.remove('animate-circle-two');
                }); 
            }
}

function randDarkColor() {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}

function getRandomRolor() {
    var letters = '64674'.split('');
    var color = '#';        
    color += letters[Math.round(Math.random() * 5)];
    letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
} 