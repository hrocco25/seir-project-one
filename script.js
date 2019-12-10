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

const incorrect = document.querySelectorAll('.incorrect')
const correct =document.querySelectorAll('.correct')
// let response = document.querySelectorAll('.response')

for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    
    //console.log('correct')
}

// for(let i = 0; i<response.length; i++){
//     response[i].addEventListener('click', response)
// }

// function response


for(let i = 0; i<incorrect.length; i++){
    incorrect[i].addEventListener('click', incorrectAnswer)
}
function incorrectAnswer(evt){
    console.log('evt for incorrect', evt)
    evt.target.style.backgroundColor ='red'    
}




function correctAnswer(evt){
    console.log('evt target', evt.target)
    evt.target.style.backgroundColor = '#82ad3e'
    // for(let i=0; i<response.length; i++){
    //     response[i].textContent= 'Correct!'
    // }
    // response.style.color='#85Acc6'
    // let img = document.createElement('IMG')
    // img.setAttribute('src', 'https://media.gettyimages.com/photos/pikes-peak-avenue-colorado-springs-picture-id92414615?b=1&k=6&m=92414615&s=612x612&w=0&h=Ik_wIFzbstuJ1gbSdb87saTejsfsPxdc_hfvT96wWds=')
    // response.appendChild(img)
    // img.style.width= '50%'
    // img.style.border= '.15em solid #6d744b'
    
}




// const questions =document.querySelector('#questions')
// questions.addEventListener('click', answer)
// function answer(evt){
//     // use evt.target to get at the class name 
//     //console.log(evt.target)
//     if(evt.target.classList.contains('correct')){
//         console.log('correct')
        
      
        

//     }else if(evt.target.classList.contains('incorrect')){
//         console.log('incorrect')
//     }
// }





// button have an active class?

//how to stop it from doing multiple clicks on the button
//if background color is not green then change it to green 
//





