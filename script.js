const arr1 = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Turus",
    "Gemini",
    "Cancer",
    "Leo",
    "virgo",
    "Lipra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
];
const arr2 = ["good luck", "Bad luck", "Fair luck", "depression", "motivation"];
const arr3 = [
    "trust no one",
    "Work hard",
    "alwayes have hope",
    "invest in yourself",
    "get more friends",
    "not give up",
];
let first = arr1[Math.floor(Math.random() * arr1.length)];

let second = arr2[Math.floor(Math.random() * arr2.length)];
let third = arr3[Math.floor(Math.random() * arr3.length)];

let message = `Your Sign is ${first}.
Your are having ${second}.
You must ${third}.`;
console.log(message);