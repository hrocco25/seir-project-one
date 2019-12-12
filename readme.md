Project Overview

Project Links

https://hrocco25.github.io/seir-project-one/
https://github.com/hrocco25/seir-project-one

Project Description 

Colorado Springs Trivia App uses HTML, CSS, and Javscript to create a dynamic trivia game.

WireFrames

I used wireframes to plan on the app before starting to code.  I made a few different options until I narrowed it down to the one I thought would work best.
(add images of wire frames)

MVP (Minimum Viable Product)

Pre-load your app with some questions and answers.
Test the user's wits & knowledge with Colorado Springs trivia.
Let the user know if they won and how many questions they got correct.

Post MVP

Add a reset button to start the trivia game over again
Add a start button 
Only show one question at a time
Add a different picture for each question  

Components

App-This will contain the primary components(Header, Main, and Footer)
Header-Contain Title of Game
Directions-Contain Main image, directions for the game, and start button.
Questions- Contains all the individual questions with individual questions, img, and answer choices
results- shows the results of the questions and has a restart button
footer- has footer information 

Code Snippets

let option = document.querySelectorAll('.option')
let currentQIndex = 0
let previousQIndex = 0

option.forEach(buttons =>{
    buttons.addEventListener('click', next)
})
function next(evt){
    evt.preventDefault()
    console.log('this is next')
    previousQIndex = currentQIndex
    currentQIndex++
    console.log(q[currentQIndex])
    //q[previousQIndex].style.display= 'none'// removes last question
    q[previousQIndex].style.display = 'none'
    q[currentQIndex].style.display = 'block'
}

This starts the trivia game when start is clicked. It makes everything in the directions class disappear because it changes the display none.  It will make the first question load because it is grabbing teh first item in the q array.

const start= document.querySelector('.start')
const q = document.querySelectorAll('.q')
let currentQIndex = 0
let previousQIndex = 0

start.addEventListener('click', startTrivia)
function startTrivia(){
    q[currentQIndex].style.display = 'block' 
    console.log('current', q[currentQIndex])
    directions.style.display= 'none'
}


I was able to create another div that had a click event that would reload the page with window.location.href=(address of the page goes here)

const restart = document.querySelector('.restart')
restart.addEventListener('click', restartTrivia)
function restartTrivia(){
    //change this link to the live page once its updated
    window.location.href=('https://hrocco25.github.io/seir-project-one/')
    //window.location.href=('file:///Users/heather/sei/projects/project-one/index.html')
}









