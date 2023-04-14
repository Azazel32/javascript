const wlancz=document.querySelector('#but1');
const wylacz=document.querySelector('#but2');
const radio=document.getElementsByClassName("radio");

wlancz.addEventListener(type='click',function() {
    document.querySelector('img').setAttribute('src','zarowka — kopia.jpg')
    checkbox.toggleAttribute('checked')

})
wylacz.addEventListener(type='click',function() {
    document.querySelector('img').setAttribute('src','zarowka.jpg')
    checkbox.toggleAttribute('checked')

})
document.querySelector('#radio1').addEventListener(type='click',function (){
    document.querySelector('img').setAttribute('src','zarowka — kopia.jpg')
    checkbox.toggleAttribute('checked')
})
document.querySelector('#radio2').addEventListener(type='click',function (){
    document.querySelector('img').setAttribute('src','zarowka.jpg')
    checkbox.toggleAttribute('checked')

})
const checkbox=document.querySelector('#checkbox');



