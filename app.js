"use strict";

const mathInp = document.getElementById('numInp');
const calApp = document.getElementById('calculator');
const btnBarobar = document.getElementById('btn8');
const btnClear = document.getElementById('btn1');
const kasr = document.getElementById('btn2');
const qoldiqBtn = document.getElementById('btn3');
const kopaytiruvBtn = document.getElementById('btn5');
const minusBtn = document.getElementById('btn6');
const plusBtn = document.getElementById('btn7');
const boluv = document.getElementById('btn4');
const btn7 = document.getElementById('btn10');
const btn8 = document.getElementById('btn11');
const btn9 = document.getElementById('btn12');
const btn4 = document.getElementById('btn13');
const btn5 = document.getElementById('btn14');
const btn6 = document.getElementById('btn15');
const btn1 = document.getElementById('btn16');
const btn2 = document.getElementById('btn17');
const btn3 = document.getElementById('btn18');



const func = () => {

    btn7.addEventListener('click', () => {
        mathInp.value += '7';
    });

    btn8.addEventListener('click', () => {
        mathInp.value += '8';
    });

    btn9.addEventListener('click', () => {
        mathInp.value += '9';
    });

    btn1.addEventListener('click', () => {
        mathInp.value += '1';
    });

    btn2.addEventListener('click', () => {
        mathInp.value += '2';
    });

    btn3.addEventListener('click', () => {
        mathInp.value += '3';
    });

    btn4.addEventListener('click', () => {
        mathInp.value += '4';
    });

    btn5.addEventListener('click', () => {
        mathInp.value += '5';
    });

    btn6.addEventListener('click', () => {
        mathInp.value += '6';
    });

    boluv.addEventListener('click', () => {
        mathInp.value += '/';
    });

    qoldiqBtn.addEventListener('click', () => {
        mathInp.value += "%";
    });

    kopaytiruvBtn.addEventListener('click', () => {
        mathInp.value += "*";
    });

    minusBtn.addEventListener('click', () => {
        mathInp.value += "-";
    });

    plusBtn.addEventListener('click', () => {
        mathInp.value += "+";
    });

    kasr.addEventListener('click', () => {
        const sum = `(-${mathInp.value})`;
        mathInp.value = sum
    })

    btnClear.addEventListener('click', () => {
        mathInp.value = "";
    });

    btnBarobar.addEventListener('click', () => {
        const resault = mathInp.value
        if (btnBarobar.click) {
            mathInp.value = eval(resault);
        } else {
            mathInp.value = '0';
        }
    })

}

func();