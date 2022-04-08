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
    return `${playerSelection} all around! Draw!`
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

function game(p_counter, c_counter, playerSelection) {
  //console.log(`${p_counter}, ${c_counter}, ${playerSelection}`)
  let computerSelection = computerPlay()
  //console.log(playRound( playerSelection, computerSelection ))
  let winner = playRound(playerSelection, computerSelection)
  if (winner.includes('You win')) {
    p_counter++
    document.getElementById('result').innerHTML = `${winner}`
    //document.getElementById('tally').innerHTML = `Player: ${p_counter} Computer: ${c_counter}`
  } else if (winner.includes('You lose')) {
    c_counter++
    document.getElementById('result').innerHTML = `${winner}`
    //document.getElementById('tally').innerHTML = `Player: ${p_counter} Computer: ${c_counter}`
  } else {
    //draw
    document.getElementById('result').innerHTML = `${winner}`
    //document.getElementById('tally').innerHTML = `Player: ${p_counter} Computer: ${c_counter}`
  } 
}

function doOnMouseover(e) {
  const button = e.srcElement
  button.classList.add('hover')
}

function doOnMouseout(e) {
  const button = e.srcElement
  button.classList.remove('hover')
}

let p_counter = 0
let c_counter = 0

function doOnClick(e) {
  const button = e.srcElement
  button.classList.add('clicked')
  //console.log(e.path[0].firstChild.data)
  game(p_counter, c_counter, e.path[0].firstChild.data.toLowerCase())
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('mouseover', doOnMouseover))
buttons.forEach(button => button.addEventListener('mouseout', doOnMouseout))
buttons.forEach(button => button.addEventListener('click', doOnClick))
console.log(buttons)

//while (true) { game(p_counter, c_counter) }

