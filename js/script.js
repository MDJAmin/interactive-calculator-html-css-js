"use strict";
function calculate() {
  var num1 = parseFloat(document.querySelector("#num1").value);
  var num2 = parseFloat(document.querySelector("#num2").value);
  var operator = document.querySelector("#operator").value;
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      result = "Unauthorized operation!";
  }

  document.querySelector("#result").value = result;
  document.querySelector("");
}
