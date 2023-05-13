const h1 = document.querySelector('h1');
const sum = document.querySelector('#sum');
const res = document.querySelector('#res');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click',btnOnClick);
val1.addEventListener('copy',showMessageWhenCopy);
val2.addEventListener('focus',onFocus);

function btnOnClick(){
    let value1 = Number(val1.value);
    let value2 = Number(val2.value);
    let resValue =0;
    if (sum.checked){
        resValue = value1 + value2;
    }else if (res.checked){
        resValue= value1 - value2;
    }else if (mul.checked){
        resValue = value1 * value2;
    }else if (div.checked){
        resValue = value1 / value2;
    }
    pResult.innerText = "Resultado: " + resValue
}

function showMessageWhenCopy(){
    alert("Copiaste el texto capo!!!");
}

function onFocus(){
    alert("Pasaste por el focus");
}