const $ = (el) => document.querySelector(el);

//Classes
const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = (a, b) => a / b;
//input number
let fun;

//eventListenr function
const calculateBtn = (e) => {
  e.preventDefault();

  const a = parseFloat($("#num1").value);
  const b = parseFloat($("#num2").value);

  //new object from calculator class

  //selected button
  switch (e.target.id) {
    case "sum":
      fun = sum;

      break;
    case "minus":
      fun = minus;

      break;
    case "divide":
      fun = divide;
      break;
    case "multiple":
      fun = multiple;
      break;
    case "total-btn":
      //save Total variable
      let saveTotal = fun(a, b);
      textarea.setAttribute("placeholder", saveTotal);
      break;
    default:
      textarea.textContent = "";
      textarea.setAttribute("placeholder", 0);
      break;
  }
};

//Dom variable
const button = $(".button-group").addEventListener("click", calculateBtn);
const textarea = $("#textaria-content");
