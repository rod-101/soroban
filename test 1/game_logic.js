/*
    1. game starts
    2. show problem
    3. inputs answer
    4. checks answer
    5. loops 4 more times
*/

function problemGenerator() {
    let firstOperand = Math.floor(Math.random() * 8 + 2);
    let secondOperand = Math.floor(Math.random() * 8 + 2);
    let rightAnswer = firstOperand * secondOperand;
    console.log(firstOperand, secondOperand, rightAnswer)
    return rightAnswer;
}

function session() {
    if(counter > 4) {
        //end game
    }
}

let counter = 0;
function counterIncrement() {
    counter++
    return counter;
}

let userAnswer = document.querySelector('.user_answer');
function check() {
    if (userAnswer.value == 10) {
        console.log('user input')
    } else {
        console.log('do nothing');
    }
    // console.log(problemGenerator.rightAnswer);
    // if (userAnswer == problemGenerator.rightAnswer) {

    // }
}

