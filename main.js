btn0.onclick = function(){
    display.value+='0';
}

btn1.onclick = function(){
    display.value+='1';
}
btn2.onclick = function(){
    display.value+='2';
}
btn3.onclick = function(){
    display.value+='3';
}
btn4.onclick = function(){
    display.value+='4';
}
btn5.onclick = function(){
    display.value+='5';
}
btn6.onclick = function(){
    display.value+='6';
}
btn7.onclick = function(){
    display.value+='7';
}
btn8.onclick = function(){
    display.value+='8';
}
btn9.onclick = function(){
    display.value+='9';
}
add.onclick = function(){
    display.value+='+';
}
div.onclick = function(){
    if(!display.value){
    display.value+='/';
    }

}
diff.onclick = function(){
    display.value+='-';
}
mul.onclick = function(){
    display.value+='*';
}
dot.onclick = function(){
    display.value+='.';
}


equ.onclick = function(){
    display.value = eval(display.value).toFixed(1);
}

ac.onclick = function(){
    display.value = '';
}

plmn.onclick = function(){
    display.value= display.value*(-1);
}
