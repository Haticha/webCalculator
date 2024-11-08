let activeNum = 0;
let numInputActive = false;
let primary = 0;
let secondary = 0;
let previousSolution = 0;
let solutionOperator = null;
let solution = 0;
let solutionOperatorSymbol = null;

const previousEquasion = document.querySelector(`.previousEquasion`);
const equasion = document.querySelector(`.equasion`);
const currentNum = document.querySelector(`.currentNum`);
displayUpdate();
function displayUpdate() {
    previousEquasion.textContent = previousSolution;
    equasion.textContent = `${primary == 0 || primary==null?'':primary} ${solutionOperatorSymbol==null?``:solutionOperatorSymbol}`
    currentNum.textContent = `${activeNum}`
}
//const calc = document.querySelector(`.calc`);////for window bound key listning
document.addEventListener(`keydown`,(event)=>{
    if(event.key==`/`){
        event.preventDefault();
        taskExecute(`devision`)
    }
});
document.addEventListener(`keyup`,(event)=>{
    event.preventDefault();
    let numInput = Number(event.key);
    if (numInput>=0 && numInput<10){ 
        constructNum(numInput);
    }else{
    switch (event.key) {
        case `Add`: case`+`:
            taskExecute(`addition`);
        break;
        case`Subtract`: case`-`:
            taskExecute(`substraction`)
        break;
        case`Multipy`: case`*`:
            taskExecute(`multiplication`)
        break;
        case`Devide`: case`/`: case`:`:
            taskExecute(`devision`)
        break;
        case `Enter`:
            taskExecute(`solution`);
        break;
        case `Backspace`:
            taskExecute(`backspace`);
        break;
        case `Decimal`: case `.`: case `,`:
            taskExecute(`decimal`);
        break;
    }
}
});

const inputs = document.querySelectorAll(`input`);
for (let index = 0; index < inputs.length; index++) {
    let inputGroup = inputs[index].className;
    let inputValue = inputs[index].value;
    inputGroup==`digits`?
        inputs[index].addEventListener('click',func => { constructNum(inputValue)}):
        inputs[index].addEventListener('click',func => {taskExecute(inputGroup)});
}

function constructNum(num) {
    if (activeNum.toString().length < 17){
        numInputActive? activeNum=`${activeNum}`+`${num}`: activeNum=num, numInputActive=true ;
        activeNum= Number(activeNum);
    }

    displayUpdate();
}
function taskExecute(task){
    let numberString = activeNum.toString();
    switch (task) {
        case `solution`:
            secondary = activeNum;
            if (solutionOperator == null) {
                break;
            } else {
                solution = solutionOperator(primary,secondary);
                if(solution.toString().length>=17){
                    solution= solution.toPrecision(17);
                    previousSolution = `${primary}${solutionOperatorSymbol}
                    ${secondary}=`;
                }else{
                    previousSolution = `${primary}${solutionOperatorSymbol}${secondary}=`;
                }
                activeNum = solution;
                solutionOperatorSymbol = null;
                solutionOperator = null;
                primary = 0;
            };
        break;
        case `clearLast`:
            activeNum = 0;
            numInputActive = false;
        break;
        case `clearAll`:
            previousSolution = 0
            solutionOperator = null;
            solutionOperatorSymbol = null;
            primary = 0;
            activeNum = 0;
            numInputActive = false;
        break;
        case `backspace`:
            numberString.length > 1?
            activeNum = Number(numberString.slice(0,-1)):
            activeNum = 0, numInputActive = false;
            numberString = ``;
        break;
        case `addition`:
            primary = activeNum;
            numInputActive = false;
            solutionOperator = func =>addition(primary,secondary);
            solutionOperatorSymbol=`+`;
        break;
        case `substraction`:
            primary = activeNum;
            numInputActive = false;
            solutionOperator = func =>substraction(primary,secondary);
            solutionOperatorSymbol=`-`;
        break;
        case `multiplication`:
            primary = activeNum;
            numInputActive = false;
            solutionOperator = func =>multiplication(primary,secondary);
            solutionOperatorSymbol=`x`;
        break;
        case `devision`:
            primary = activeNum;
            numInputActive = false;
            solutionOperator = func =>devision(primary,secondary);
            solutionOperatorSymbol=`/`;
        break;
        case `negate`:
            activeNum = activeNum*-1;
        break;
        case `decimal`:
            if (numberString.slice(-1)!=`.`) {
                activeNum%1 == 0 ? activeNum = activeNum + `.`: activeNum=activeNum;
            }
        break;
    }
    displayUpdate();
}
function addition(primary,secondary) {return primary + secondary;}
function substraction(primary,secondary) {return primary - secondary;}
function multiplication(primary,secondary) {return primary * secondary;}
function devision(primary,secondary) {return primary / secondary;}
