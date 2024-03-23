var oneBtn =document.getElementById('calc-one');
var twoBtn =document.getElementById('calc-one');
var threeBtn =document.getElementById('calc-one');
var fourBtn =document.getElementById('calc-one');
var fiveBtn =document.getElementById('calc-one');
var sixBtn =document.getElementById('calc-one');
var sevenBtn =document.getElementById('calc-one');
var eightBtn =document.getElementById('calc-one');
var nineBtn =document.getElementById('calc-one');
var zeroBtn =document.getElementById('calc-one');


var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display-val');

var displayVal='0';
var pendingVal;
var eValStringArray = [];
var calcNumBtns=document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');


var updateDisplayVal= (clickObj) =>{
    var btnText = clickObj.target.innerText;


if(displayVal ==='0')
displayVal ='';

displayVal +=btnText;
displayValElement.innerText=displayVal;

}
var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            eValStringArray.push(pendingVal);
            eValStringArray.push('+');

            break;

        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            eValStringArray.push(pendingVal);
            eValStringArray.push('-');
            break;
       
       
       
       
            case '*':
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                eValStringArray.push(pendingVal);
                eValStringArray.push('*');
         break;
            case '/':
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                eValStringArray.push(pendingVal);
                eValStringArray.push('/');
                break;


              case '=':
                eValStringArray.push(displayVal);
                var evaluation = eval(eValStringArray.join(' '));
                displayVal = evaluation + '';
                displayValElement.innerText=displayVal;
                eValStringArray = [];

              break;

        default:
            break;
    }
}

for( let i=0 ; i<calcNumBtns.length; i++){
calcNumBtns[i].addEventListener('click',updateDisplayVal,false);
}

for(let i=0; i<calcOperatorBtns.length;i++){
    calcOperatorBtns[i].addEventListener('click',performOperation,false);
}




clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
   eValStringArray = [];
   displayValElement.innerHTML= displayVal;

}
backspaceBtn.onclick= ()=>{
    let lengthOfDisplayval=displayVal.length;
    displayVal=displayVal.slice(0, lengthOfDisplayval - 1);

if(displayVal==='')
displayVal='0';

    displayValElement.innerText=displayVal;
}
decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
    displayVal += '.';
displayValElement.innerText= displayVal;
}