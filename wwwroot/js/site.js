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

let javascriptbutton = document.getElementById("javascriptbutton");
javascriptbutton.addEventListener('click', counting);

let hideoutButton = document.getElementById("hideoutbutton");
hideoutButton.addEventListener('click', disapear);
disapear();



