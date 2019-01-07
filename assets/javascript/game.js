var wins = 0;
var losses = 0;
var totalScore = 0;
var numToGuess;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;

function randomNumber() {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomValue() {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function newTurn() {

    numToGuess = randomNumber();
    crystalValue1 = randomValue();
    crystalValue2 = randomValue();
    crystalValue3 = randomValue();
    crystalValue4 = randomValue();

    totalScore = 0;

    $("#crystal1").attr("data-crystalvalue", crystalValue1);
    $("#crystal2").attr("data-crystalvalue", crystalValue2);
    $("#crystal3").attr("data-crystalvalue", crystalValue3);
    $("#crystal4").attr("data-crystalvalue", crystalValue4);

    $("#numToGuess").text(numToGuess);
    $("#totalScore").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);

    console.log(numToGuess);
};

$(document).ready(function () {
    newTurn();
});

$(".crystalButton").on("click", function () {

    var clickedCrystalValue = ($(this).attr("data-crystalValue"));
    clickedCrystalValue = parseInt(clickedCrystalValue);

    totalScore += clickedCrystalValue;
    $("#totalScore").text(totalScore);

    if (totalScore === numToGuess) {
        wins++;
        alert("You won!");
        newTurn();
    }
    else if (totalScore > numToGuess) {
        losses++;
        alert("You lost");
        newTurn();
    }
});

