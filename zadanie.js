

const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');
const button3=document.querySelector('#button3');
button1.addEventListener(type='click',function(){
    const button1=document.querySelector('h6');
    button1.innerHTML='Swietnie!'});
button2.addEventListener(type='click',function(){
    const button2=document.querySelector('h5');
    button2.innerText='Swietnie!'});
button3.addEventListener(type='click',function (){
    const div=document.querySelectorAll('div');
    console.log(div);
    for (const el of div) {
        if (el.tagName === "STRONG") {
        el.style.border='3px dotted black';
        }
    }
});
