var atras = document.getElementById("item1");
var alante = document.getElementById("item2");
var Ans = document.getElementById("item3");
var brackets = document.getElementById("item4");
var Delete = document.getElementById("delete1");
var reset = document.getElementById("item6");
var sum = document.getElementById("item7");
var mult = document.getElementById("item8");
var one = document.getElementById("item9");
var zero = document.getElementById("zero");
var rest = document.getElementById("item11");
var divid = document.getElementById("item12");
var point = document.getElementById("item13");
var result = document.getElementById("item14");
var screen = document.getElementById("screen");
var opA= []; var opB = []; var num = 0; var type = 9;var opType =0; var num2=0;

zero.addEventListener('click',zerofnc)
one.addEventListener('click',onefnc)
sum.addEventListener('click',sumar)
rest.addEventListener('click',restar)
mult.addEventListener('click',mult)
divid.addEventListener('click',divide)
point.addEventListener('click',function (){
    screen.value+='.';
})
brackets.addEventListener('click',function (){
    //screen.value+='()'
})
reset.addEventListener('click',function (){
    screen.value='';
    resultShow.value="";
})
function onefnc(){
    if( opType==0 ){
        opA.push("1");
        resultShow.value= opA.join("");
        num= Number(opA.join("").toString());
    }else {
        opB.push("1");
        resultShow.value= opB.join("");
        num2= Number(opB.join("").toString());
    }
    
}
function zerofnc(){
    if(opType==0){
        opA.push("0");
        resultShow.value= opA.join("");
        num= Number(opA.join("").toString());
    }else {
        opB.push("0");
        resultShow.value= opB.join("");
        num2= Number(opB.join("").toString());
    }
    
}
function sumar(){
    screen.value=num+' + '; 
    type = 0;
    opType=1
}
function restar(){
    screen.value=num+' - ';
    type= 1;
    opType=1
}
function mult(){
    screen.value=num+' x ';
    type= 2;
    opType=1
}
function divide(){
    screen.value=num+' / ';
    type= 3;
    opType=1
}
    switch(type){
        case 0:
        alert("suma");
        break;

        case 1:
        alert("resta");
        break;

        case 2:
        alert("mult");
        break;

        case 3:
        alert("divid");
        break;
    }




