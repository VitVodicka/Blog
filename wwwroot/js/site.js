let numberOfClicks = 0;

function disappear() {
    let starview = document.getElementById("starreview");
    starview.style.visibility = "hidden";
}

function appear() {
    let starview = document.getElementById("starreview");
    starview.style.visibility = "visible";
}

function counting() {
    numberOfClicks++;
    if (numberOfClicks == 3) {
        numberOfClicks = 0;
        appear();
    }
}

function mouseover(star) {
    star.innerHTML = "★";
}

function mouseout(star) {
    star.innerHTML = "☆";
}

function eventListener(star) {
    star.addEventListener('mouseover', function () {
        mouseover(star);
    });
    star.addEventListener('mouseout', function () {
        mouseout(star);
    });
    
}

let javascriptButton = document.getElementById("javascriptbutton");
javascriptButton.addEventListener('click', counting);

let hideoutButton = document.getElementById("hideoutbutton");
hideoutButton.addEventListener('click', disappear);
disappear();



let star1 = document.getElementById("hvezdicka1");
let star2 = document.getElementById("hvezdicka2");
let star3 = document.getElementById("hvezdicka3");
let star4 = document.getElementById("hvezdicka4");
let star5 = document.getElementById("hvezdicka5");

eventListener(star1);
eventListener(star2);
eventListener(star3);
eventListener(star4);
eventListener(star5);