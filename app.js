"use strict";

const mathInp = document.getElementById("numInp");
const calApp = document.getElementById("calculator");
const equalBtn = document.getElementById("equal-btn");
const btnClear = document.getElementById("clear-btn");
const fractionBtn = document.getElementById("button");
const residualBtn = document.getElementById("residual-btn");
const multipBtn = document.getElementById("multip-btn");
const divisionBtn = document.getElementById("minus-btn");
const additionBtn = document.getElementById("additon-btn");
const stayBtn = document.getElementById("tobe-btn");
const dotBtn = document.getElementById("dot-btn");
const btn7 = document.getElementById("seven-btn");
const btn8 = document.getElementById("eight-btn");
const btn9 = document.getElementById("nine-btn");
const btn4 = document.getElementById("four-btn");
const btn5 = document.getElementById("five-btn");
const btn6 = document.getElementById("six-btn");
const btn1 = document.getElementById("one-btn");
const btn2 = document.getElementById("two-btn");
const btn3 = document.getElementById("three-btn");
const zero = document.getElementById("zero-btn");

const CalcFunction = () => {
  dotBtn.addEventListener("click", () => {
    mathInp.value += ".";
  });

  btnClear.addEventListener("click", () => {
    mathInp.value = "";
  });

  residualBtn.addEventListener("click", () => {
    mathInp.value += "%";
  });

  stayBtn.addEventListener("click", () => {
    mathInp.value += "/";
  });

  fractionBtn.addEventListener("click", () => {
    mathInp.value = `(-${mathInp.value})`;
  });

  divisionBtn.addEventListener("click", () => {
    mathInp.value += "-";
  });

  additionBtn.addEventListener("click", () => {
    mathInp.value += "+";
  });

  multipBtn.addEventListener("click", () => {
    mathInp.value += "*";
  });

  btn1.addEventListener("click", () => {
    mathInp.value += "1";
  });

  btn2.addEventListener("click", () => {
    mathInp.value += "2";
  });

  btn3.addEventListener("click", () => {
    mathInp.value += "3";
  });

  btn4.addEventListener("click", () => {
    mathInp.value += "4";
  });

  btn5.addEventListener("click", () => {
    mathInp.value += "5";
  });

  btn6.addEventListener("click", () => {
    mathInp.value += "6";
  });

  btn7.addEventListener("click", () => {
    mathInp.value += "7";
  });

  btn8.addEventListener("click", () => {
    mathInp.value += "8";
  });

  btn9.addEventListener("click", () => {
    mathInp.value += "9";
  });

  zero.addEventListener("click", () => {
    mathInp.value += "0";
  });

  equalBtn.addEventListener("click", () => {
    const resault = mathInp.value;
    if (equalBtn.click) {
      mathInp.value = eval(resault);
    } else {
      mathInp.value = "0";
    }
  });
};

(function () {
  CalcFunction();
})();
