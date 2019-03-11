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
var ac = document.getElementById("item6");
var screen = document.getElementById("screen");
var opA= []; var opB = []; var num = 0;

zero.addEventListener('click',function (){
    opA.push("0");
    screen.value= opA.join("")
})
one.addEventListener('click',function (){
    opA.push("1");
    screen.value= opA.join("")
})
sum.addEventListener('click',function (){
    screen.value+='+';
    num= Number(opA.join("").toString());
})
rest.addEventListener('click',function (){
    screen.value+='-'
})
mult.addEventListener('click',function (){
    screen.value+='x'
})
divid.addEventListener('click',function (){
    screen.value+='/'
})
point.addEventListener('click',function (){
    screen.value+='.'
})
brackets.addEventListener('click',function (){
    screen.value+='()'
})
ac.addEventListener('click',function (){
    screen.value+=''
})



