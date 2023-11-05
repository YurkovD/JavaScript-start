const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficBody = document.querySelector('body');

trafficBody.addEventListener('click', makeGreen ); 

function makeGreen() {
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightEl.style.background = ('green');
    trafficBody.removeEventListener('click', makeGreen);
    trafficBody.addEventListener('click', makeYellow);
   
    
}
function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightE2.style.background = ('Yellow');
    trafficBody.removeEventListener('click', makeYellow);
    trafficBody.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('Red');
    trafficBody.removeEventListener('click', makeRed);
    trafficBody.addEventListener('click', makeGreen);
}

