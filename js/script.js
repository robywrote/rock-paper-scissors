'use strict'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const possible = ["rock", "paper", "scissors"];

function computerPlay() {
    return possible[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'draw'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'Rock smashes scissors! You win!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Paper covers rock! You lose!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Paper covers rock! You win!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Scissors cut paper! You lose!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'Scissors cut paper! You win!'
  } else {
    // player: scissors, computer: rock
    return 'Rock smashes scissors! You lose!'
  }
}