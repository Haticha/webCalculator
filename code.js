let activeNum = 0;
let numInputActive = false;
let primary = 0;
let previousSolution = 0;
let solutionOperator = null;
let solution = 0;
const display = document.querySelector(`.display`);

const inputs = document.querySelectorAll(`input`);
for (let index = 0; index < inputs.length; index++) {
    let inputGroup = inputs[index].className;
    let inputValue = inputs[index].value;
    inputGroup==`digits`?
        inputs[index].addEventListener('click',func => { constructNum(inputValue)}):
        inputs[index].addEventListener('click',func => {taskExecute(inputGroup)});
}

function constructNum(num) {
    numInputActive? activeNum= `${activeNum}`+`${num}`: activeNum=num, numInputActive=true ;
    console.log(activeNum , activeNum.length);
}
function taskExecute(task){
    switch (task) {
        case `solution`:
            secondary = activeNum;
            solution = solutionOperator(primary,secondary);
        break;
        case `clearLast`:
            activeNum = 0;
            numInputActive = false;
        break;
        case `clearAll`:
            //add other numbers of operation
            solutionOperator = null;
            primary = 0;
            activeNum = 0;
            numInputActive = false;
        break;
        case `backspace`:
            activeNum.length>1?
            activeNum = activeNum.slice(0,-1):
            activeNum = 0, numInputActive = false;
        break;
        case `addition`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>addition(primary,secondary)
        break;
        case `substraction`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>substraction(primary,secondary)
        break;
        case `multiplication`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>multiplication(primary,secondary)
        break;
        case `devision`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>devision(primary,secondary)
        break;
    }
}
function addition(primary,secondary) {return primary + secondary;}
function substraction(primary,secondary) {return primary - secondary;}
function multiplication(primary,secondary) {return primary * secondary;}
function devision(primary,secondary) {return primary / secondary;}