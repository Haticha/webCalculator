const display = document.querySelector(`.display`)
const inputs = document.querySelectorAll(`input`);
for (let index = 0; index < inputs.length; index++) {
    let inputGroup = inputs[index].className;
    let inputValue = inputs[index].value;

    inputGroup==`digits`?
        inputs[index].addEventListener('click',func => { digit(inputValue)}):
        inputs[index].addEventListener('click',func => {taskExecute(inputGroup)});

    console.log(`event setup done ${inputGroup}:${inputValue}`);
}
function digit(num) {
    console.log(num);
}
function taskExecute(task){
    console.log(task);
    switch (task) {
        case `solution`:
            
        break;
        case `clearLast`:

        break;
        case `clearAll`:

        break;
        case `backspace`:

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
}