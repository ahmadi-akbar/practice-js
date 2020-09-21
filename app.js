//Classes
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        return this.num1 + this.num2;
    }
    minus() {
        return this.num1 - this.num2;
    }
    multiple() {
        return this.num1 * this.num2;
    }
    divide() {
        return this.num1 / this.num2;
    }
}
//Dom variable
const button = document.querySelector('.button-group').addEventListener('click', calculateBtn);
const textarea = document.querySelector('#textaria-content');
//save Total variable
let saveTotal = 0;

//eventListenr function
function calculateBtn(e) {
    e.preventDefault();

    //input number
    const number1 = parseFloat(document.querySelector('#num1').value);
    const number2 = parseFloat(document.querySelector('#num2').value);

    //new object from calculator class
    const calculate = new Calculator(number1, number2);

    //selected button
    switch (e.target.id) {
        case 'sum':
            saveTotal = calculate.sum();

            textarea.setAttribute('placeholder', saveTotal);
            break;
        case 'minus':
            saveTotal = calculate.minus();

            textarea.setAttribute('placeholder', saveTotal);
            break;
        case 'divide':
            saveTotal = calculate.divide();

            textarea.setAttribute('placeholder', saveTotal);
            break;
        case 'multiple':
            saveTotal = calculate.multiple();

            textarea.setAttribute('placeholder', saveTotal);
            break;
        case 'total-btn':
            textarea.textContent = saveTotal;
            break
        default:
            textarea.textContent = '';
            textarea.setAttribute('placeholder', 0);
            break;
    }
}