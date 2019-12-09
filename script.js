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

const incorrect = document.querySelector('.incorrect')
const correct =document.querySelector('.correct')

incorrect.addEventListener('click', incorrectAnswer)
correct.addEventListener('click', correctAnswer)

function incorrectAnswer(){
    console.log('first incorrect answer')
}

function correctAnswer(){
    console.log('correct answer for question one')
    //this only works on the first .correct
    correct.style.backgroundColor = '#82ad3e'
    let response = document.querySelector('.response')
    response.textContent= 'Correct!'
    // response.style.color='#85Acc6'
    let img = document.createElement('IMG')
    img.setAttribute('src', 'https://media.gettyimages.com/photos/pikes-peak-avenue-colorado-springs-picture-id92414615?b=1&k=6&m=92414615&s=612x612&w=0&h=Ik_wIFzbstuJ1gbSdb87saTejsfsPxdc_hfvT96wWds=')
    response.appendChild(img)
    img.style.width= '50%'
    img.style.border= '.15em solid #6d744b' 
}

//how do i get all of the .corrects to work in one function
// for loop?
// loop through all the correct correct responses an 

