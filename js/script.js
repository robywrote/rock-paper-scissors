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

function game() {
  let p_counter = 0
  let c_counter = 0
  for (let i=0; i < 5; i++) {
    let p = prompt('1-2-3-Go').toLowerCase()
    let c = computerPlay()
    let winner = playRound(p, c)
    if (winner.includes('You win')) {
      p_counter++
    } else if (winner.includes('You lose')) {
      c_counter++
    } else {
      //draw
      console.log(winner)
      continue
    }
    console.log(winner)
  }
  if (p_counter > c_counter) {
    console.log('You won the game!')
  } else if (p_counter < c_counter) {
    console.log('You lost! Better luck next time!')
  } else {
    //draw
    console.log('It was a draw!')
  }
}


function doSomething(e) {
  //console.log(e)
  const button = e.srcElement
  button.classList.add('hover')
  console.log(button)
  //console.log(e.path[0].firstChild.data)
}

const buttons = document.querySelectorAll('button')
console.log(buttons)
buttons.forEach(button => button.addEventListener('mouseover', doSomething))
//game()