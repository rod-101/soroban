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

//CREATES NEXT PROBLEM
function nextProblem() {
    firstOperand = Math.floor(Math.random() * 8 + 2);
    secondOperand = Math.floor(Math.random() * 89 + 10);
    rightAnswer = firstOperand * secondOperand; 
    document.querySelector('.problem').innerHTML = firstOperand + " x " + secondOperand; 
}

//BUG: when you check and the answer is wrong, then delete it and now inputs the right answer and checked, the color of the user_answer goes red ang vanish then it does not render anything.

//CHECKS ANSWER

let counter = 0;
function checkAnswer() {
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
    } else {
        //adds the animateWrongAnswer animation to the user_answer class if user answers wrong 
        $('.user_answer').addClass('animateWrongAnswer');
        //removes the animateWrongAnswer animation after it is finished 
        window.setTimeout(function() {
            $('.user_answer').removeClass('animateWrongAnswer');
        }, 450)
    }
}



//delete button
function backspace() {
    if (userAnswer.length > 0) {
        let sliced = userAnswer.substring(0, userAnswer.length -1)
        userAnswer = sliced;
        document.querySelector('.user_answer').innerHTML = userAnswer;
        console.log(userAnswer)
    }
}

