let firstValue = '';
let operator = '';
let secondValue = '';

function operate(operator,firstValue,secondValue){
if (operator == '+'){
add(firstValue,secondValue)
}
else if(operator == '-'){
subtract(firstValue,secondValue)
}
else if(operator == '*'){
multiply(firstValue,secondValue)
}
else if(operator == '/'){
divide(firstValue,secondValue)
}
}


function add(firstValue,secondValue){
const addition = Number(firstValue)+Number(secondValue);
console.log (addition);    
display(addition.toFixed(2));
}

function subtract(firstValue,secondValue){
    const sub = Number(firstValue)-Number(secondValue);
console.log (sub);    
display(sub.toFixed(2));
    }

function multiply(firstValue,secondValue){
    const mul = Number(firstValue)*Number(secondValue);
    console.log (mul);    
    display(mul.toFixed(2));
        }
function divide(firstValue,secondValue){
    if (secondValue==='0'){
        display('Not allowed');
    }
    else{
    const divid = Number(firstValue)/Number(secondValue);
    console.log (divid);    
    display(divid.toFixed(2));
    }
            }
function percent(firstValue,secondValue){
    const percent = (Number(firstValue)/Number(secondValue))*100;
    display(percent.toFixed(2))
}




const numberPressed = document.querySelectorAll('.btn_number');
numberPressed.forEach((item)=>{
item.addEventListener('click', ()=>{

if (operator!='' && firstValue!='') {
    secondValue+=item.textContent;
    console.log(secondValue);
    display(secondValue);
}
else{
    firstValue += item.textContent;
    console.log(firstValue);
    display(firstValue);
}
});
});


document.querySelectorAll('.operator').forEach((item)=>{
item.addEventListener('click',()=>{
if(displayElement.textContent!=''){
    firstValue = displayElement.textContent;
}

    operator = item.textContent;
    console.log(operator)
    });
});

function display(output){

    document.querySelector('.display').textContent = output;
}


document.querySelector('.equal').addEventListener('click', ()=>{
    if (operator==='+'){
        add(firstValue,secondValue);
        firstValue='';
        secondValue='';
        operator='';
    }
    else if (operator==='-'){
        subtract(firstValue,secondValue);
        firstValue='';
        secondValue='';
        operator='';
    }
    else if (operator==='*'){
        multiply(firstValue,secondValue);
        firstValue='';
        secondValue='';
        operator='';
    }
    else if (operator==='/'){
        divide(firstValue,secondValue);
        firstValue='';
        secondValue='';
        operator='';
    }
    else if (operator==='%'){
        percent(firstValue,secondValue);
        firstValue='';
        secondValue='';
        operator='';
    }
});

document.querySelector('.clearButton').addEventListener('click', ()=>{
display();
firstValue='';
secondValue=''
operator=''
});

// wasn't able to figure out +- logic
const plusMinus = document.querySelector('.plusMinus');
const displayElement = document.querySelector('.display');
plusMinus.addEventListener('click',()=>{
    let currentValue = displayElement.textContent;
    if(currentValue.charAt(0)=== '-'){
        displayElement.textContent = currentValue.substring(1);
    }
    else {
        displayElement.textContent = '-' + currentValue;
    }
    
});


