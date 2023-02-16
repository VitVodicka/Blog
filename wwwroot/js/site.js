// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
let numberOfClicks = 0;
function disapear() {
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
function mouseover(let star) {
    document.getElementById(star).innerHTML = "★";
}
function mouseout(let star) {
    document.getElementById(star).innerHTML = "☆";
}
function eventListener(let star) {
    star.addEventListener('mouseover', mouseover);
    star.addEventListener('mouseout', mouseout);
}

let javascriptbutton = document.getElementById("javascriptbutton");
javascriptbutton.addEventListener('click', counting);

let hideoutButton = document.getElementById("hideoutbutton");
hideoutButton.addEventListener('click', disapear);
disapear();

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



