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
var opA= []; var opB = []; var num = 0; var type = 9;

zero.addEventListener('click',function (){
    opA.push("0");
    resultShow.value= opA.join("");
    num= Number(opA.join("").toString());
})
one.addEventListener('click',function (){
    opA.push("1");
    resultShow.value= opA.join("");
    num= Number(opA.join("").toString());
})
sum.addEventListener('click',function (){
    screen.value=num+' + '; 
    type = 0;
})
rest.addEventListener('click',function (){
    screen.value=num+' - ';
    type= 1;
})
mult.addEventListener('click',function (){
    screen.value=num+' x '
    type= 2;
})
divid.addEventListener('click',function (){
    screen.value=num+' / ';
    type= 3;
})
point.addEventListener('click',function (){
    screen.value+='.';
})
brackets.addEventListener('click',function (){
    //screen.value+='()'
})
Delete.addEventListener('click',function (){
    screen.value=''
})
/*function operation(type) {
    swictch (type){
        case 0:

            break;
        case 1:

        break;

    }
}*/



