//create a problem with a hidden answer
//user inputs an answer
    //user inputs
    //waits for click on the 'check' button
    //converts string to number
//check user input 
    // if correct, display correct
        //if problems solved is less than 5
            //go back to first instruction
        //if prblems solved is 5
            // ...   
    //if wrong, display wrong
        //do not proceed to another problem    

let rightAnswer = 0;
let firstOperand = 0;
let secondOperand = 0;
let userAnswerStyle = document.querySelector('.user_answer');
let problem = document.querySelector('.problem').innerHTML;
let userAnswer = document.querySelector('.user_answer').innerHTML;



//MAIN GAME FUNCTION
function startGame() {
    let allNumKeys = document.querySelectorAll('.keynum');
    (function clickableKeys() {
        for (let i = 0; i < allNumKeys.length; i++){
            allNumKeys[i].addEventListener('click', () => {
                let num = allNumKeys[i].innerHTML;
                userAnswer += num;
                document.querySelector('.user_answer').innerHTML = userAnswer;
                console.log(typeof(userAnswer), userAnswer)
            })
        }
    })();

    //first problem
    nextProblem();
    console.log(firstOperand, secondOperand, rightAnswer)
}

//TRANSITION DELAY FOR RIGHT ANSWER
function rightAnswerTransition() {
    setTimeout(() => {
        userAnswer = document.querySelector('.user_answer').innerHTML = "";
    },500);

    setTimeout(() => { 
        userAnswerStyle.style.backgroundColor = 'rgb(244, 242, 222)'
    }, 300)
}

function wrongAnswerTransition() {
    
}

//CREATES NEXT PROBLEM
function nextProblem() {
    firstOperand = Math.floor(Math.random() * 8 + 2);
    secondOperand = Math.floor(Math.random() * 89 + 10);
    rightAnswer = firstOperand * secondOperand; 
    document.querySelector('.problem').innerHTML = firstOperand + " x " + secondOperand; 
}

//CHECKS ANSWER
function check() {
    let counter = 0;
    return function checkAnswer() {
        if (userAnswer == rightAnswer) {
            userAnswerStyle.style.backgroundColor = 'green';
            nextProblem();      
            counter++;
            console.log(counter);
            console.log(rightAnswer);
            if (counter >= 5) {
                console.log('end game')
            }
            rightAnswerTransition();
            // userAnswerStyle.style.backgroundColor = 'rgb(244, 242, 222)';
        } else {
            userAnswerStyle.style.animation = "wrongAnsAnimation 1000ms 0s 1";
            userAnswerStyle.style.backgroundColor = 'rgb(190, 35, 35)';
            if(userAnswerStyle.style.backgroundColor = 'rgb(190, 35, 35)') {
                document.querySelector('.user_answer').style.color = 'white'
            }
        }
    }
}

let checkUserAnswer = check();

//delete button
function backspace() {
    if (userAnswer.length > 0) {
        let sliced = userAnswer.substring(0, userAnswer.length -1)
        userAnswer = sliced;
        document.querySelector('.user_answer').innerHTML = userAnswer;
        console.log(userAnswer)
    }
}