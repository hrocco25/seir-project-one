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

const correct =document.querySelector('.correct')

correct.addEventListener('click', correctAnswer)

function correctAnswer(){
    console.log('correct answer for question one')
    //this only works on the first .correct
}

//how do i get all of the .corrects to work in one function
// for loop?
// loop through all the correct correct responses an 

