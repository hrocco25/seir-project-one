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
const questions = document.querySelector('#questions')
console.log(questions)
const scoreStart = 0
const incorrect = document.querySelectorAll('.incorrect')
const correct =document.querySelectorAll('.correct')
const response= document.querySelectorAll('.response')

const start= document.querySelector('.start')
let option = document.querySelectorAll('.option')

const q = document.querySelectorAll('.q')
console.log(q)
//console.log(option)

let currentQIndex = 0
let previousQIndex = 0


// option.addEventListener('click', startTrivia)

// for(let i=0; i<option.length; i++){
// }
start.addEventListener('click', startTrivia)

option.forEach(buttons =>{
    buttons.addEventListener('click', next)
})

function startTrivia(){
    // console.log('start')
    // previousQIndex += currentQIndex
    // q[previousQIndex].style.display= 'none'
    // console.log('previous', q[previousQIndex])
// i would delte this^^^^^

    q[currentQIndex].style.display = 'block' //this will make the first question load

    console.log('current', q[currentQIndex])
    
    // option = document.querySelectorAll('.option')
    // console.log(currentQIndex)
    // console.log(option[currentQIndex += 1])
    // option.addEventListener('click', startTrivia)
    
   
}
console.log(q)

function next(evt){
    evt.preventDefault()
    console.log('this is next')
    previousQIndex = currentQIndex
    currentQIndex++
    console.log(q[currentQIndex])
    //q[previousQIndex].style.display= 'none'// removes last question
    q[previousQIndex].style.display = 'none'
    q[currentQIndex].style.display = 'block'
   
    // q[currentQIndex]+1
    // q[currentQIndex].style.display='block'
}
// next()
// function that make the next one appear.
    // add to index
    // wait for options to be clicked and make 
    // q[with the next index ] = block


for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    //console.log('correct') 

}
function correctAnswer(evt){
    //console.log('evt target', evt.target)
    evt.target.style.backgroundColor = '#82ad3e'
}

for(let i = 0; i<incorrect.length; i++){
    incorrect[i].addEventListener('click', incorrectAnswer)
}
function incorrectAnswer(evt){
    //console.log('evt for incorrect', evt)
    evt.target.style.backgroundColor ='#F7A89D' 
}
    











