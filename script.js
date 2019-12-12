//add query selector all for correct
//add click event listener to correct 
// when clicked turn background  background green
// have the word correct below the answer choices 
// once it is clicked do not allow it to seclect any other options?

//add querry selector all for incorrect
//add click event listener for incorrect
//when incorrect is clicked turn background red
// have the word incorrect below answer choices 
// once it is clicked do not let the user click any other options
// show the correct answer 

//add button so it clicks it goes to the next question
//if one is showing then switch to the 
//next question change display on new question from none
//and change the previous question display to none 
// if two is showing go to three
// 

const result = document.querySelector('.result')
//const incorrect = document.querySelectorAll('.incorrect')
const correct =document.querySelectorAll('.correct')
const response= document.querySelectorAll('.response')
const start= document.querySelector('.start')
let option = document.querySelectorAll('.option')
const q = document.querySelectorAll('.q')
const directions= document.querySelector('.directions')
const restart = document.querySelector('.restart')
//console.log(q)
let currentQIndex = 0
let previousQIndex = 0
let score = 0
//if correct is clicked add one to score
//else do nothing 

restart.addEventListener('click', restartTrivia)
function restartTrivia(){
    //change this link to the live page once its updated
    window.location.href=('https://hrocco25.github.io/seir-project-one/')
    //window.location.href=('file:///Users/heather/sei/projects/project-one/index.html')
}

start.addEventListener('click', startTrivia)
function startTrivia(){
    q[currentQIndex].style.display = 'block' //this will make the first question load
    console.log('current', q[currentQIndex])
    directions.style.display= 'none'
    //removes the directions and start button
    
}
//console.log(q)

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

//const result =document.querySelector('.result').textContent(updatedScore())

//total score in counsel 
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
console.log('updated score', score)

for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    //console.log('correct') 

}
function correctAnswer(evt){
    console.log('evt target', evt.target)
    //evt.target.style.backgroundColor = '#82ad3e'
    if(evt.target.classList.contains('correct')){
        console.log('this is correct')
        updateScore()
    }
}



// for(let i = 0; i<incorrect.length; i++){
//     incorrect[i].addEventListener('click', incorrectAnswer)
// }
// function incorrectAnswer(evt){
//     //console.log('evt for incorrect', evt)
//     evt.target.style.backgroundColor ='#F7A89D' 
// }
    











