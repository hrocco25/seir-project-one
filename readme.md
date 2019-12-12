# Project Overview

## Project Links

[View deployed site](https://hrocco25.github.io/seir-project-one/)
<br>[Github repo](https://github.com/hrocco25/seir-project-one)

 ## Project Description 

Colorado Springs Trivia App uses HTML, CSS, and Javscript to create a dynamic trivia game.

## WireFrames

I used wireframes to plan on the app before starting to code.  I made a few different options until I narrowed it down to the one I thought would work best.
(add images of wire frames)

## MVP (Minimum Viable Product)

* Pre-load your app with some questions and answers.
* Test the user's wits & knowledge with Colorado Springs trivia.
* Let the user know if they won and how many questions they got correct.

## Post MVP

* Add a reset button to start the trivia game over again
* Add a start button 
* Only show one question at a time
* Add a different picture for each question  

## Post Post MVP

* Things I would like to add to it in the future
    * Timer
    * A second trivia choice on another subject 
    * Keep track of high score even if page is reloaded
    * Users can compete against each other with a high core board



## Components

| Component | Description |
| --- | :---: |  
| App | This will contain the primary components (Header, Main and Footer) & include Routes |
| Header | Contain title of game |
| Directions |  Contain Main image, directions for the game, and start button. |
| Questions | Contains all the individual questions with individual questions, img, and answer choices |
| Results | Shows the results of the questions and has a restart button |
| Footer |  Footer information |

## Time

This is a rough estimate of my time and will keep better track next project but wanted to document what I remembered. 

* It took me a 8 hours to wire frame and design the site in html and css.
* I spent some time doing pseudo code but I did not keep track of that time.
* I spent time getting the first question to respond to click events and change colors. I didn't end up using most of the function.
* It took me a day to figure out how to switch question so it only displays one question at a time.
* About an hour to get it to display the score at the end
* About a half hour to get it to restart the game at the end
* I went back and changed the styles of things once I was able to get the javascript working.  I unfortunately did not keep track of that time.
* I spent about an 2 hours writing up the readme and cleaning up my html, css, and javascript 





## Code Snippets

This starts the trivia game when start is clicked. It makes everything in the directions class disappear because it changes the display none.  It will make the first question load because it is grabbing teh first item in the q array.

```
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
```

Loop through all of the option class and have them each have a click event. The function evt.preventDefault() makes the page not reset when it is clicked. It also goes to the next question when user clicks on an answer choice. current question display will change to none and the next one will appear in block.

```
option.forEach(buttons =>{
    buttons.addEventListener('click', next)
})
function next(evt){
    evt.preventDefault()
    console.log('this is next')
    previousQIndex = currentQIndex
    currentQIndex++
    console.log(q[currentQIndex])
    q[previousQIndex].style.display = 'none'
    q[currentQIndex].style.display = 'block'
}
```

Loops through everything with the correct class and adds a click event. When it is clicked it calls the updateScore function.  The updateScore function then adds one to it and will add text content depending on how many of the correct class was clicked. 

```
for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    //console.log('correct') 
}
function correctAnswer(evt){
    //console.log('evt target', evt.target)
    //evt.target.style.backgroundColor = '#82ad3e'
    if(evt.target.classList.contains('correct')){
        console.log('this is correct')
        updateScore()
    }
}

function updateScore(){
     score++
    
    if(score === 10){
        result.textContent = '100% Great job!'
    } else if(score === 9  ){
        result.textContent= '90% Great job!'
    } else if( score === 8){
        result.textContent = '80% Good job!'
    } else if( score === 7){
        result.textContent= '70% Good job!'
    }else if(score === 6){
        result.textContent = '60% Looks like you need to visit!'
    }else if(score === 5){
        result.textContent = '50% Looks like you need to visit!'
    }else if(score === 4){
        result.textContent = '40% Looks like you need to visit!'
    }else if(score === 3){
        result.textContent = '30% Looks like you need to visit!'
    }else if(score === 2){
        result.textContent= '20% Looks like you need to visit!'
    }else if(score === 1){
        result.textContent = '10% Looks like you need to visit!'
    }else if(score === 0){
        result.textContent = '0% Looks like you need to visit!'
    }
}
```

I was able to create another div that had a click event that would reload the page with window.location.href=(address of the page goes here)

```
const restart = document.querySelector('.restart')
restart.addEventListener('click', restartTrivia)
function restartTrivia(){
    //change this link to the live page once its updated
    window.location.href=('https://hrocco25.github.io/seir-project-one/')
    //window.location.href=('file:///Users/heather/sei/projects/project-one/index.html')
}
```


## Issues and Resolution 


I was trying to use a carousel to change questions that would appear on the screen but it would only go to the first question.  I ended up having an extra div in my html in the first question.   








