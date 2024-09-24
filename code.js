let activeNum = 0;
let numInputActive = false;
let primary = 0;
let previousSolution = 0;
let solutionOperator = null;
let solution = 0;
let solutionOperatorSymbol = null;
const previousEquasion = document.querySelector(`.previousEquasion`);
const equasion = document.querySelector(`.equasion`);
const currentNum = document.querySelector(`.currentNum`);
function displayUpdate() {
    previousEquasion.textContent = ``
    equasion.textContent = `${primary>0?primary:''} ${solutionOperatorSymbol=null?``:solutionOperatorSymbol}`
    currentNum.textContent = `${activeNum>0?activeNum:``}`
}
const inputs = document.querySelectorAll(`input`);
for (let index = 0; index < inputs.length; index++) {
    let inputGroup = inputs[index].className;
    let inputValue = inputs[index].value;
    inputGroup==`digits`?
        inputs[index].addEventListener('click',func => { constructNum(inputValue)}):
        inputs[index].addEventListener('click',func => {taskExecute(inputGroup)});
}

function constructNum(num) {
    numInputActive? activeNum=`${activeNum}`+`${num}`: activeNum=num, numInputActive=true ;
    activeNum= Number(activeNum);
    displayUpdate();
}
function taskExecute(task){
    switch (task) {
        case `solution`:
            secondary = activeNum;
            if (solutionOperator == null) {
                break;
            } else {
                solution = solutionOperator(+primary,+secondary);
            };
        break;
        case `clearLast`:
            activeNum = 0;
            numInputActive = false;
        break;
        case `clearAll`:
            //add other numbers of operation
            solutionOperator = null;
            solutionOperatorSymbol = null;
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
            solutionOperator = func =>addition(primary,secondary);
            solutionOperatorSymbol=`&plus;`;
        break;
        case `substraction`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>substraction(primary,secondary);
            solutionOperatorSymbol=`&minus;`;
        break;
        case `multiplication`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>multiplication(primary,secondary);
            solutionOperatorSymbol=`&times;`;
        break;
        case `devision`:
            numInputActive?primary = activeNum: primary = previousSolution;
            numInputActive = false;
            solutionOperator = func =>devision(primary,secondary);
            solutionOperatorSymbol=`&divide;`;
        break;
    }
    displayUpdate();
}
function addition(primary,secondary) {return primary + secondary;}
function substraction(primary,secondary) {return primary - secondary;}
function multiplication(primary,secondary) {return primary * secondary;}
function devision(primary,secondary) {return primary / secondary;}
