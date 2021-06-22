let counterClickA = 0;

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

function buttonsControl(button) {
    switch (button.className) {
        case 'plus-one':
            counterA++;
            NumberA.textContent = counterA;
            clickCounterA.textContent = counterClickA;
            soundClick();
            animateClickA();
            setCounterA(counterClickA);
            break;
        case 'minus-one':
            counterA--;
            NumberA.textContent = counterA;
            clickCounterA.textContent = counterClickA;
            soundClick();
            animateClickA();
            setCounterA(counterClickA);
            break;
        case 'plus-two':
            counterB++;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            break;
        case 'minus-two':
            counterB--;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            break;
    };
}

function counterClick(button) {
    if (button.className == 'plus-one' || button.className == 'plus-two') {
        counterClickA++;
    } else if (button.className == 'minus-one' || button.className == 'minus-two') {
        counterClickA--;
    }
}

function setCounterA(count) {

    clickCounterA.classList.remove('invisible');
    setTimeout(fix);
}

function setTimeout(fix){
    clickCounterA.classList.add('invisible');
    counterClickA = 0;
}, 1000); 

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


