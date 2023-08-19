//selects all elements that has the .key class and returns a nodelist 
let key = document.querySelectorAll('.key');

let answer = document.querySelector('.answer');
let check = document.querySelector('.check');
let alarm = document.querySelector('.alarm');
let problem = document.querySelector('.problem');
var user_input;

let firstNum;
let secondNum;
let rightAnswer;

//start game
//loop
    //render problem
    //loop
        //user inputs
            //
        //check user input
    //proceed to another problem

function startGame() {
    firstNum = Math.floor(Math.random() * 8 + 2); 
    secondNum = Math.floor(Math.random() * 89 + 10); 
    rightAnswer = firstNum * secondNum;
    problem.innerHTML = firstNum + ' x ' + secondNum;

    //user inputs
    //loops through all the elements that has the '.key' class and assigns them the eventlistener and function
    for (let i = 0; i < key.length; i++) {
        
        key[i].addEventListener('click', function myFunction() {

            //selects the content of a specified index, converts it into a string, adds all the values and displays it in the div having the .answer class
            user_input = answer.innerHTML += String(key[i].innerHTML);

            //converts user_input from string into number everytime the user clicks a key
            user_input = Number(user_input);
        })        
    }

    console.log(typeof(user_input), user_input);

    //checks if input is right
    checkAnswer();
}


function checkAnswer(user_input) {
    let  userIsCorrect = true;
    if (user_input == rightAnswer) {
        alarm.style.color = 'pink';
    }

    while (!userIsCorrect) {

        alarm.style.color = 'red';
    }
}        



// function checkUserAnswer(answer) {
//     if (answer == rightAnswer) {
//         // alarm.innerHTML = 'Correct | '
//         console.log('correct');
//     } else {
//         console.log('wrong');
//     }
//     //check = true;
//     // answer.innerHTML = '';
// }

// content.addEventListener('click', function() {
//     for (i = 0; i ) {

//     }
// })