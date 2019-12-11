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


const incorrect = document.querySelectorAll('.incorrect')
const correct =document.querySelectorAll('.correct')
const response= document.querySelectorAll('.response')
const start= document.querySelector('.start')
let option = document.querySelectorAll('.option')
const q = document.querySelectorAll('.q')
//console.log(q)
let currentQIndex = 0
let previousQIndex = 0
let score = 0
//if correct is clicked add one to score
//else do nothing 



start.addEventListener('click', startTrivia)
function startTrivia(){
    q[currentQIndex].style.display = 'block' //this will make the first question load
    console.log('current', q[currentQIndex])
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




function updateScore(){
    score++
    console.log('updated score', score)
}


// this is not doing anything at the moment

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

console.log(score)

// for(let i = 0; i<incorrect.length; i++){
//     incorrect[i].addEventListener('click', incorrectAnswer)
// }
// function incorrectAnswer(evt){
//     //console.log('evt for incorrect', evt)
//     evt.target.style.backgroundColor ='#F7A89D' 
// }
    











