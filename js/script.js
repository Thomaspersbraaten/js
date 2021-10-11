// // Question 1 - 

// var pets = [
//     {
//       type: "cat",
//       age: 5.5,
//     },
//     {
//       type: "dog",
//       age: 3.8,
//     },
//     {
//       type: "parrot",
//       age: 4.0,
//     },
// ];

// for (var i = 0; i < pets.length; i++){
//     if (pets[i].age >= 4) {
//         console.log(pets[i].type);
//     }
// }

// // Question 2

// function typeCheck(value) {
//     if (typeof value === "boolean") {
//         console.log(value);
//     }
//     else {
//         console.log("Please pass a boolean value in");
//     }
// }

// typeCheck(true)

// // Question 3 

// var subHeading = document.querySelector("h2");
// var button = document.querySelector("button");

// function changeSubHeading() {
//     subHeading.innerHTML = "Updated subheading";
//     subHeading.style.color = "blue";
// }

// button.onclick = changeSubHeading;
 


// Question 1

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// Question 2

for (i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// question 3 

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

var listedGame = document.querySelector("ul")

for (i = 0; i < games.length; i++) {
    if (games[i].rating < 3.5 && games[i].rating != null)  {
    listedGame.innerHTML += "<li>" + games[i].title + ":" + "  " + games[i].rating; + "</li>"  
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

whatIDontLike("ticks")


// question 5


function numbers(number1, number2)

