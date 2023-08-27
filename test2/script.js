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

var userAnswer = document.querySelector('.user_answer').innerHTML;

//MAIN GAME FUNCTION
function startGame() {
    var rightAnswer;
    var firstOperand;
    var secondOperand;
    let userAnswerStyle = document.querySelector('.user_answer');
    let allNumKeys = document.querySelectorAll('.keynum');

    function clickableKeys() {
        for (let i = 0; i < allNumKeys.length; i++){
            allNumKeys[i].addEventListener('click', () => {
                let num = allNumKeys[i].innerHTML;
                userAnswer += num;
                document.querySelector('.user_answer').innerHTML = userAnswer;
                console.log(typeof(userAnswer), userAnswer)
            })
        }
    }
    clickableKeys();
        
    //takes input
    function userInput(userAnswer) {
        return userAnswer;
    }

    //checks answer
    function checkAnswer(userAnswer) {
        if (userAnswer == rightAnswer) {
            userAnswerStyle.style.backgroundColor = 'green'
        } else {
            userAnswerStyle.style.backgroundColor = 'red'
        }
    }    
    
    //creates the next problem
    function nextProblem() {
        firstOperand = Math.floor(Math.random() * 8 + 2);
        secondOperand = Math.floor(Math.random() * 89 + 10);
        rightAnswer = firstOperand * secondOperand;
    }
}

function backspace() {
    if (userAnswer.length > 0) {
        let sliced = userAnswer.substring(0, userAnswer.length -1)
        userAnswer = sliced;
        document.querySelector('.user_answer').innerHTML = userAnswer;
        console.log(userAnswer)
    }
}
