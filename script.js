const factDisplay = document.getElementById("fact-display");
const generateFactButton = document.getElementById("generate-fact");

const facts = [
    "The average person laughs about 17 times a day.",
    "The Earth is not perfectly round, it's slightly flattened at the poles.",
    "It takes about 8 minutes for light to travel from the Sun to Earth.",
    "The population of the Earth is about 8 billion people.",
    "The largest ocean on Earth is the Pacific Ocean."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

generateFactButton.addEventListener("click", () => {
    factDisplay.textContent = getRandomFact();
});
