'use strict'

function capitalize(str) {
  return str.slice(0,1).toUpperCase() + str.slice(1)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const possible = ["rock", "paper", "scissors"];

let p_counter = 0
let c_counter = 0

function computerPlay() {
    return possible[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection=computerPlay()) {
  // this is kludgy, uses 1st char in return string as flag to be trimmed later
  
  if (playerSelection === computerSelection) {
    return `${capitalize(playerSelection)} all around!`
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'pRock smashes scissors!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'cPaper covers rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'pPaper covers rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'cScissors cut paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'pScissors cut paper!'
  } else {
    // player: scissors, computer: rock
    return 'cRock smashes scissors!'
  }
}

function game(winner) {  
  if (winner.startsWith('p')) {
    p_counter++
    document.getElementById('result').innerHTML = `${winner.slice(1)}`
    //document.getElementById('tally').innerHTML = `Player: ${p_counter} Computer: ${c_counter}`
  } else if (winner.startsWith('c')) {
    c_counter++
    document.getElementById('result').innerHTML = `${winner.slice(1)}`
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



function doOnClick(e) {
  const button = e.srcElement
  button.classList.add('clicked')
  //console.log(e.path[0].firstChild.data)
  game(playRound(e.path[0].firstChild.data.toLowerCase()))
  console.log(`player: ${p_counter} computer: ${c_counter}`)
  if (p_counter === 5) {
    document.getElementById('winner').innerHTML = `You win! \nGame Over`
    p_counter = 0
    c_counter = 0
  } else if (c_counter === 5) {
    document.getElementById('winner').innerHTML = `Computer wins :( \nGame Over`
    p_counter = 0
    c_counter = 0
  }
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('mouseover', doOnMouseover))
buttons.forEach(button => button.addEventListener('mouseout', doOnMouseout))
buttons.forEach(button => button.addEventListener('click', doOnClick))
console.log(buttons)

