

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
            color1.style.backgroundColor = randomColor({luminosity: 'dark', hue: 'monochrome'});
            break;
        case 'minus-one':
            counterA--;
            NumberA.textContent = counterA;
            soundClick();
            animateClickA();
            color1.style.backgroundColor = randomColor({luminosity: 'dark', hue: 'monochrome'});
            break;
        case 'plus-two':
            counterB++;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            color2.style.backgroundColor =  randomColor({luminosity: 'dark', hue: 'green'});
            break;
        case 'minus-two':
            counterB--;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            color2.style.backgroundColor = randomColor({luminosity: 'dark', hue: 'green'});
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

// let colorDark = '#300b0b';
// let colorWater = '#f25f9a';
// let colorSky = '#f25f9a';
// let colorWood = '#0a8f27';
// let colorFire = '#f25f9a';

// function getRandomColor(color) {
//     let p = 1,
//         temp,
//         random = Math.random(),
//         result = '#';

//     while (p < color.length) {
//         temp = parseInt(color.slice(p, p += 2), 16)
//         temp += Math.floor((255 - temp) * random);
//         result += temp.toString(16).padStart(2, '0');
//     }
//     return result;
// }


// function getRandomColor() {
//     var letters = "0123456789ABCDEF".split('');
//     var color = "#";
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }