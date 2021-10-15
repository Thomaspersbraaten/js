// Question 1

var outOfStock = true;

if (outOfStock) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// OR

if (!outOfStock) {
    console.log("in stock");
}
else {
    console.log("out of stock");
}

// Question 2

for (i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// Question 3 

var games = [
    {
     title: "Grand Theft Auto",
     rating: 4.48,
    },
    {
     title: "Portal 2",
     rating: 3.5,
    },
    {
     title: "Team Fortress",
     rating: null,
    },
    {
     title: "The Witcher",
     rating: 3.0,
    },
    {
     title: "The Elder Scrolls",
     rating: 2.9,
    },
];

var listedGame = document.querySelector("ul");

for (i = 0; i < games.length; i++) {
    if (games[i].rating < 3.5 && games[i].rating !== null)  {
    listedGame.innerHTML += "<li>" + games[i].title + ": " + games[i].rating; + "</li>"; 
    }    
}

// Question 4

function whatIDontLike(insects) {
    var typeOfInsects = typeof insects;
    if (typeOfInsects === "string") {
        console.log("i don't like " + insects);
    }
    else {
        console.log("please send in a string");
    }
}

whatIDontLike("ticks");

// Question 5

function substractionOfNumbers(number1, number2) {
    var convertedNumber1 = parseFloat(number1);
    var convertedNumber2 = parseFloat(number2);
    if (isNaN(convertedNumber1) || isNaN(convertedNumber2)) {
        return "Invalid argument(s)";
    }
    return convertedNumber1 - convertedNumber2;  
}

var substractionContainer = document.querySelector("#subtraction");
var sum = substractionOfNumbers(50, "10");

substractionContainer.innerHTML = sum;

// Question 6

var pageButton = document.querySelector(".page");
var titleSelector = document.querySelector("title");
var bodySelector = document.querySelector("body");
var h1Selector = document.querySelector("h1");
var ulSelector = document.querySelector("ul");

function changePage() {
    titleSelector.innerHTML = "Updated title";
    bodySelector.style.backgroundColor = "yellow";
    h1Selector.style.color = "green", h1Selector.style.fontFamily = "impact", h1Selector.innerHTML = "<a href=#>" + "Programming Foundations Course Assignment" + "</a>";
    ulSelector.style.padding = 0, ulSelector.style.listStyle = "none";
}

pageButton.onclick = changePage;

// Question 7

var toys = [
    {
     name: "Lego",
     price: 15.6,
    },
    {
     name: "Master of the Universe",
     price: "28.3",
    },
    {
     name: "Barbie",
     price: null,
    },
    {
     name: "Mr Potato Head",
     price: 89.99,
    },
];

var priceButton = document.querySelector(".price");
var totalPrice = document.querySelector("#total");
var toysLength = toys.length;

function ConvertPricetoWebpage() {
    var sum = 0;
    for (i = 0; i < toysLength; i++) {
        if (toys[i].price === null) {
            continue;
        }
        sum = sum + parseFloat(toys[i].price);
    }
    totalPrice.innerHTML = sum;
}

priceButton.onclick = ConvertPricetoWebpage;
