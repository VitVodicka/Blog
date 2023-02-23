//star functions
function mouseover(starNumber) {//hovers over stars and fills them according to the number of hovered stars

    switch (starNumber) {
        case 1:
            star1.innerHTML = "★";
            star1.style.color = "#22577A";

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

function mouseout() {//if user hovers out of stars, according to the selected stars other stars change color to the black and the stars are empty
    if (positionOfStars == 0) {


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
    else {
        switch (positionOfStars) {
            case 1:
                star2.innerHTML = "☆";
                star3.innerHTML = "☆";
                star4.innerHTML = "☆";
                star5.innerHTML = "☆";

                star2.style.color = "black";
                star3.style.color = "black";
                star4.style.color = "black";
                star5.style.color = "black";
                break;
            case 2:
                star3.innerHTML = "☆";
                star4.innerHTML = "☆";
                star5.innerHTML = "☆";
                star3.style.color = "black";
                star4.style.color = "black";
                star5.style.color = "black";
                break;
            case 3:
                star4.innerHTML = "☆";
                star5.innerHTML = "☆";
                star4.style.color = "black";
                star5.style.color = "black";
                break;
            case 4:
                star5.innerHTML = "☆";
                star5.style.color = "black";
                break;
            case 5:
                break;

        }

    }
};

let positionOfStars = 0;//  keeps track of how many stars the user has selected (0-5)
function selectedStars(starNumber) {
    switch (starNumber) {
         // If the user selects 1,2,3,4 stars, mark it as selected and unmark the others
        case 1:
            star1.innerHTML = "★";
            star1.style.color = "#22577A";

            star2.innerHTML = "☆";
            star3.innerHTML = "☆";
            star4.innerHTML = "☆";
            star5.innerHTML = "☆";

            star2.style.color = "black";
            star3.style.color = "black";
            star4.style.color = "black";
            star5.style.color = "black";
            positionOfStars = 1;
            starNumber = 1;

            break;
        case 2:
            star1.innerHTML = "★";
            star2.innerHTML = "★";
            star1.style.color = "#22577A";
            star2.style.color = "#22577A";

            star3.innerHTML = "☆";
            star4.innerHTML = "☆";
            star5.innerHTML = "☆";
            star3.style.color = "black";
            star4.style.color = "black";
            star5.style.color = "black";
            positionOfStars = 2;
            starNumber = 2;

            break;
        case 3:
            star1.innerHTML = "★";
            star2.innerHTML = "★";
            star3.innerHTML = "★";
            star1.style.color = "#22577A";
            star2.style.color = "#22577A";
            star3.style.color = "#22577A";


            star4.innerHTML = "☆";
            star5.innerHTML = "☆";
            star4.style.color = "black";
            star5.style.color = "black";
            positionOfStars = 3;
            starNumber = 3;


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

            star5.innerHTML = "☆";
            star5.style.color = "black";
            positionOfStars = 4;
            starNumber = 4;

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
            positionOfStars = 5;
            starNumber = 5;
            break;
    }
};
//event listeners and recognizers of how hovering over stars, hovering out of stars and if users selects star
function eventListener(star1, star2, star3, star4, star5) {
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
    star1.addEventListener('click', function () {
        selectedStars(1);
    });
    star2.addEventListener('click', function () {
        selectedStars(2);
    });
    star3.addEventListener('click', function () {
        selectedStars(3);
    });
    star4.addEventListener('click', function () {
        selectedStars(4);

    });
    star5.addEventListener('click', function () {
        selectedStars(5);
    });

};
//sends to controller->Model to variable Prumer 
function sendToAverage() {
    var data = { Prumer: positionOfStars }
    $.ajax({
        url: 'home/javascrpitTransfer',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (result) {

        },
        error: function (error) {
            alert("failure");
        }
    });

};

let javascriptButton = document.getElementById("javascriptbutton");
javascriptButton.addEventListener('click', function () {
    counting();
});

let hideoutButton = document.getElementById("hideoutbutton");
hideoutButton.addEventListener('click', function () {
    if (positionOfStars > 0) {


        disappear();
        sendToAverage();
    }
    else {
        alert("Not chosen a star");
    }

});
disappear();
let star1 = document.getElementById("hvezdicka1");
let star2 = document.getElementById("hvezdicka2");
let star3 = document.getElementById("hvezdicka3");
let star4 = document.getElementById("hvezdicka4");
let star5 = document.getElementById("hvezdicka5");

eventListener(star1, star2, star3, star4, star5);
//appearing part of code and disappearing parts of code
let numberOfClicks = 0;

function disappear() {

    let starview = document.getElementById("starreview");
    starview.style.visibility = "hidden";
}

function appear() {
    let starview = document.getElementById("starreview");
    starview.style.visibility = "visible";
}

function counting() {//if user clicks 3 times on the button the review part appears
    numberOfClicks++;
    if (numberOfClicks == 3) {
        numberOfClicks = 0;
        appear();
    }
}