//Classes
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        const sum = this.num1 + this.num2;
        return sum;
    }
    minus() {
        const minus = this.num1 - this.num2;
        return minus;
    }
    multiple() {
        const multiple = this.num1 * this.num2;
        return multiple;
    }
    divide() {
        const divide = this.num1 / this.num2;
        return divide;
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
            const sum = calculate.sum();
            saveTotal = sum;
            textarea.setAttribute('placeholder',saveTotal);
            break;
        case 'minus':
            const minus = calculate.minus();
            saveTotal = minus;
            textarea.setAttribute('placeholder',saveTotal);
            break;
        case 'divide':
            const divide = calculate.divide();
            saveTotal = divide;
            textarea.setAttribute('placeholder',saveTotal);
            break;
        case 'multiple':
            const multiple = calculate.multiple();
            saveTotal = multiple;
            textarea.setAttribute('placeholder',saveTotal);
            break;
        case 'total-btn':
            textarea.textContent = saveTotal;
            break
        default:
            textarea.textContent = '';
            textarea.setAttribute('placeholder',0);
            break;
    }
}
