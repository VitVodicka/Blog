class Stars {

    constructor() {
        this.positionOfStars = 0;
    }
    mouseover(starNumber) {

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


    mouseout() {
        if (this.positionOfStars == 0) {


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
            switch (this.positionOfStars) {
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


        selectedStars(starNumber) {//maybe a problem
            switch (starNumber) {
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
                    this.positionOfStars = 1;

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
                    this.positionOfStars = 2;

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
                    this.positionOfStars = 3;


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
                    this.positionOfStars = 4;

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
                    this.positionOfStars = 5;
                    break;
            }
        }
        eventListener(star1, star2, star3, star4, star5) {
            star1.addEventListener('mouseover', function () {
                this.mouseover(1);
            });
            star2.addEventListener('mouseover', function () {
                this.mouseover(2);
            });
            star3.addEventListener('mouseover', function () {
                this.mouseover(3);
            });
            star4.addEventListener('mouseover', function () {
                this.mouseover(4);
            });
            star5.addEventListener('mouseover', function () {
                this.mouseover(5);
            });

            star1.addEventListener('mouseout', function () {
                this.mouseout();
            });
            star2.addEventListener('mouseout', function () {
                this.mouseout();
            });
            star3.addEventListener('mouseout', function () {
                this.mouseout();
            });
            star4.addEventListener('mouseout', function () {
                this.mouseout();
            });
            star5.addEventListener('mouseout', function () {
                this.mouseout();
            });
            star1.addEventListener('click', function () {
                this.selectedStars(1);
            });
            star2.addEventListener('click', function () {
                this.selectedStars(2);
            });
            star3.addEventListener('click', function () {
                this.selectedStars(3);
            });
            star4.addEventListener('click', function () {
                this.selectedStars(4);

            });
            star5.addEventListener('click', function () {
                this.selectedStars(5);
            });
        }
    }


class Appearing {
    constructor() {
        this.numberOfClicks = 0;
    }


    disappear() {
        let starview = document.getElementById("starreview");
        starview.style.visibility = "hidden";
    }

    appear() {
        let starview = document.getElementById("starreview");
        starview.style.visibility = "visible";
    }

    counting() {
        this.numberOfClicks++;
        if (this.numberOfClicks == 3) {
            this.numberOfClicks = 0;
            this.appear();
        }
    }
}

const star = new Stars();
const appear = new Appearing();

let javascriptButton = document.getElementById("javascriptbutton");
javascriptButton.addEventListener('click', appear.counting);

let hideoutButton = document.getElementById("hideoutbutton");
hideoutButton.addEventListener('click', appear.disappear);
appear.disappear();

let star1 = document.getElementById("hvezdicka1");
let star2 = document.getElementById("hvezdicka2");
let star3 = document.getElementById("hvezdicka3");
let star4 = document.getElementById("hvezdicka4");
let star5 = document.getElementById("hvezdicka5");
star.eventListener(star1, star2, star3, star4, star5);