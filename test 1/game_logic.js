/*
    1. game starts
    2. show problem
    3. inputs answer
    4. checks answer
    5. loops 4 more times
*/

let counter = 0;
let userAnswer = document.querySelector('.user_answer');

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

function counterIncrement() {
    counter++
    return counter;
}

function check() {
    let rightAnswer = problemGenerator();
    if (userAnswer.value == rightAnswer) {
        console.log('you are correct!')
    } else {
        console.log('wrong answer');
    }
    // console.log(problemGenerator.rightAnswer);
    // if (userAnswer == problemGenerator.rightAnswer) {

    // }
}


