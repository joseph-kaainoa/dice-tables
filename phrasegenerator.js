'use strict';

const CHAR_LIMIT_LOWER = 4;
const CHAR_LIMIT_UPPER = 8;

document.getElementById("generateButton").addEventListener("click", () => {
    document.getElementById("outputPhrase").value = generateHitResult();
});

let specialSymbolList;

const hitResultTable = [
    { number: 1, result: "Buttocks slashed, you can't sit down for a week" },
    { number: 2, result: "Facial wounds, scars on face reduce charisma" },
    { number: 3, result: "Nose crushed, lose sense of smell, loss of charisma" },
    { number: 4, result: "Crushing blow to mouth, teeth knocked out, loss of charisma" },
    { number: 5, result: "Leg damaged, walk with a limp" },
    { number: 6, result: "Arm damaged, may not use for randomized period of time" },
    { number: 7, result: "Brain damaged, loss of memory" },
    { number: 8, result: "Glancing blow on scalp, most of hair gone, loss of charisma" },
    { number: 9, result: "Ear lopped off, loss of hearing in that ear due to scarring" },
    { number: 10, result: "Fingers chopped off, loss of dexterity determined by game master" },
    { number: 11, result: "" },
    { number: 12, result: "" },
    { number: 13, result: "" },
    { number: 14, result: "" },
    { number: 15, result: "" },
    { number: 16, result: "Result is as normal, critical hit avoided by character" },
    { number: 17, result: "" },
    { number: 18, result: "" },
    { number: 19, result: "" },
    { number: 20, result: "" },
    { number: 21, result: "Shoulder bone crushed, loss of strength determined by game master" },
    { number: 22, result: "Lung punctured, loss of constitution determined by game master" },
    { number: 23, result: "Throat damaged, loss of speaking ability" },
    { number: 24, result: "Groin damage, no longer capable of sexual activity" },
    { number: 25, result: "Hand severed, game master will determine which one" },
    { number: 26, result: "Eye penetrated, game master will determine which eye has lost sight" },
    { number: 27, result: "Arm severed, game master will determine which" },
    { number: 28, result: "Leg severed, game master will determine which one" },
    { number: 29, result: "Spinal cord severed, crippled for life" },
    { number: 30, result: "Instant death, skill has been crushed" },
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateHitResult() {
    const hitResultIndex = getRandomInt(hitResultTable.length);

    return hitResultTable[hitResultIndex].result;
}
