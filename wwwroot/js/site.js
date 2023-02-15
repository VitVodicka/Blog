// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function countingNumberOfClicks() {
    numberOfClicks++;
    if (numberOfClicks == 4) {
        starview.visibility = "visible";
    }
}
function hideStar() {
    starview.style.visibility = "hidden";

}
let starview = document.getElementById("starreview");
var button = document.getElementById("javascriptbutton");
let hideoutButton = document.getElementById("hideoutbutton");

//starview.style.visibility = "hidden";
let numberOfClicks = 0;



button.addEventListener('click', countingNumberOfClicks);
hideoutButton.addEventListener('click', hideStar);
