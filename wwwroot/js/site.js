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

function mouseover(starNumber) {
   
    switch (starNumber) {
        case 1:
            star1.innerHTML = "★";
            star1.style.color ="#22577A";
            
            break;
        case 2:
            star1.innerHTML = "★";
            star2.innerHTML = "★";
            star1.style.color = "#22577A";
            star2.style.color = "#22577A";
            break;
        case 3:
            star1.innerHTML = "★";
            star2.innerHTML = "★";
            star3.innerHTML = "★";
            star1.style.color = "#22577A";
            star2.style.color = "#22577A";
            star3.style.color = "#22577A";
            break;
        case 4:
            star1.innerHTML = "★";
            star2.innerHTML = "★";
            star3.innerHTML = "★";
            star4.innerHTML = "★";
            star1.style.color = "#22577A";
            star2.style.color = "#22577A";
            star3.style.color = "#22577A";
            star4.style.color = "#22577A";
            break;
        case 5:
            star1.innerHTML = "★";
            star2.innerHTML = "★";
            star3.innerHTML = "★";
            star4.innerHTML = "★";
            star5.innerHTML = "★";
            star1.style.color = "#22577A";
            star2.style.color = "#22577A";
            star3.style.color = "#22577A";
            star4.style.color = "#22577A";
            star5.style.color = "#22577A";
            break;

    }
    
}

function mouseout() {
    star1.innerHTML = "☆";
    star2.innerHTML = "☆";
    star3.innerHTML = "☆";
    star4.innerHTML = "☆";
    star5.innerHTML = "☆";

    star1.style.color = "black";
    star2.style.color = "black";
    star3.style.color = "black";
    star4.style.color = "black";
    star5.style.color = "black";
    
}

function eventListener(star1,star2,star3,star4,star5) {
    star1.addEventListener('mouseover', function () {
        mouseover(1);
    });
    star2.addEventListener('mouseover', function () {
        mouseover(2);
    });
    star3.addEventListener('mouseover', function () {
        mouseover(3);
    });
    star4.addEventListener('mouseover', function () {
        mouseover(4);
    });
    star5.addEventListener('mouseover', function () {
        mouseover(5);
    });

    star1.addEventListener('mouseout', function () {
        mouseout();
    });
    star2.addEventListener('mouseout', function () {
        mouseout();
    });
    star3.addEventListener('mouseout', function () {
        mouseout();
    });
    star4.addEventListener('mouseout', function () {
        mouseout();
    });
    star5.addEventListener('mouseout', function () {
        mouseout();
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

eventListener(star1, star2, star3, star4, star5);
