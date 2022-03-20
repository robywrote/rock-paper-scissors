function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const possible = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return possible[getRandomInt(3)];
}