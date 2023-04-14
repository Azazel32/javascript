let input1;
let input2;
const dane1=document.getElementById('a');
const dane2=document.getElementById('b');
document.querySelector('#porownaj').addEventListener('click',function (){
    input1=dane1.getAttribute('value');
    input2=dane2.getAttribute('value');
    console.log(input1);
    console.log(input2);
    console.log('a>b');
    if(a>b){
        document.querySelector('#wieksza').innerHTML='prawda';
        console.log(input1>input2);
    }else{
        document.querySelector('#wieksza').innerHTML='falsz';
    }

    console.log('a=b');

    if(input1===input2){
        document.querySelector('#rowna').innerHTML='prawda';
    }else{
        document.querySelector('#rowna').innerHTML='falsz';
    }

    console.log('a<b');

    if(input1<input2){
        document.querySelector('#mniejsza').innerHTML='prawda';
        console.log(a<b);
    }else{
        document.querySelector('#mniejsza').innerHTML='falsz';
    }
})
