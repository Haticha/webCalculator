let activeNum = 0
let active = false
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
    active? activeNum= `${activeNum}`+`${num}`: activeNum=num, active=true ;
    console.log(activeNum , activeNum.length);
}
function taskExecute(task){
    switch (task) {
        case `solution`:
            
        break;
        case `clearLast`:
            activeNum = 0;
            active = false;
        break;
        case `clearAll`:
            //add other numbers of operation
            activeNum = 0;
            active = false;
        break;
        case `backspace`:
            activeNum.length>1?
            activeNum = activeNum.slice(0,-1):
            activeNum = 0, active = false;
        break;
        case `addition`:

        break;
        case `substraction`:

        break;
        case `multiplication`:

        break;
        case `devision`:

        break;
    }
    console.log(activeNum , activeNum.length);
}