//! CHALLENGE 1- OBJECT AND FUNCTIONS
console.log("Challenge 1- ✅ OBJECT AND FUNCTIONS");
let person = {
    name: "Anish",
    age: 17,
    country: "India",
};

const logData = function() {
    console.log(
        `${person.name} is ${person.age} years old and lives in ${person.country}`
    );
};

logData();

//! CHALLENGE 2- IF ELSE
console.log("");
console.log("Challenge 2- ✅ IF ELSE");

let age = 17;

if (age < 6) {
    console.log("free");
} else if (age < 18) {
    console.log("Child Discount");
} else if (age < 27) {
    console.log("Student Discount");
} else if (age < 67) {
    console.log("full price");
} else {
    console.log("Senior Citizen Discount");
}

//! CHALLENGE 3- LOOPS AND ARRAYS
console.log("");
console.log("Challenge 3- ✅ LOOPS AND ARRAYS");

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
console.log("Top 5 largest countries in the world:");
for (let i = 0; i < largeCountries.length; i++) {
    console.log(`- ${largeCountries[i]}`);
}

//! CHALLENGE 3- PUSH, POP, SHIFT, UNSHIFT
console.log("");
console.log("Challenge 4- ✅ PUSH, POP, SHIFT, UNSHIFT");

let largeeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// USING PUSH AND POP
largeeCountries.pop();
largeeCountries.push("Pakistan");

// USING SHIFT AND UNSHIFT
largeeCountries.shift(); //?REMOVE FIRST ELEMENT IN THE ARRAY
largeeCountries.unshift("China"); //? ADDS ELEMENT TO THE START OF THE ARRAY

console.log("Top 5 largest countries in the world:");
for (let i = 0; i < largeeCountries.length; i++) {
    console.log(`- ${largeeCountries[i]}`);
}

//! CHALLENGE 5- LOGICAL OPERATORS
console.log("");
console.log("Challenge 5- ✅ LOGICAL OPERATORS");

let dayOfMonth = 13;
let weekday = "Friday";

if (weekday === "Friday" && dayOfMonth === 13) {
    console.log("IT IS FRIDAY THE 13TH 😱");
}

//! CHALLENGE 6- ROCK PAPERS AND SCISSORS
console.log("");
console.log("Challenge 6- ✅ ROCK PAPERS AND SCISSORS");

let hands = ["rock", "paper", "scissor"];

function randomItem() {
    let randomHand = Math.floor(Math.random() * 3);
    return `Your random hand is- ${hands[randomHand]}`;
}

console.log(randomItem());

//! CHALLENGE 7- SORTING FRUITS
console.log("");
console.log("Challenge 7- ✅ SORTING FRUITS");

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortingFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] == "🍎") {
            appleShelf.textContent += "🍎 ";
        } else {
            orangeShelf.textContent += "🍊 ";
        }
    }
}

sortingFruit();
console.log("DAMN ANISH YOU DID IT, I AM SO PROUD OF YOU 😭".toLowerCase());

//! CHALLENGE 8- SENTENCE GENERATOR
console.log("");
console.log("Challenge 8- ✅ SENTENCE GENERATOR");

function generateSentence(desc, arr) {
    let baseString = `- The ${arr.length} ${desc} are `;
    const lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i] + ".";
        } else {
            baseString += arr[i] + ", ";
        }
    }
    return baseString;
}

const sentence1 = generateSentence("largest countries", [
    "China",
    "India",
    "USA",
]);
const sentence2 = generateSentence("best fruits", ["Apple", "Banana"]);

console.log(sentence1);
console.log(sentence2);

//! CHALLENGE 9- RENDER IMAGES
console.log("");
console.log("Challenge 9- ✅ RENDER IMAGES");

// Create function that render those three images
// Use a for loop, template literals, (+=)
// .innerHtml to solve the challenge

const imgs = [
    "images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg",
];

imgs.push("images/cat2.jpg");

const container = document.getElementById("container");
// let imageBox = (imgContainer.innerHtml = ``);

function renderImages() {
    let imgsDOM = "";
    for (let i = 0; i < imgs.length; i++) {
        // console.log(imgs[i]);
        imgsDOM += `<img alt="cats" src="${imgs[i]}" class="team-img" />`;
    }
    container.innerHTML = imgsDOM;
}

renderImages();