const wlancz=document.querySelector('#but1');
const wylacz=document.querySelector('#but2');
const radio1=document.querySelector('#radio1');
const radio2=document.querySelector('#radio2');
const checkbox=document.querySelector('#checkbox');
const tr=document.querySelector('h6');
checkbox.checked=false;
tr.innerHTML='Wyłączona';
wlancz.addEventListener(type='click',function() {
    document.querySelector('img').setAttribute('src','zarowka — kopia.jpg')
    checkbox.checked=true;
    radio1.checked=true;
    tr.innerHTML='Włączona';
})
wylacz.addEventListener(type='click',function() {
    document.querySelector('img').setAttribute('src','zarowka.jpg')
    checkbox.checked=false;
    radio2.checked=true;
    tr.innerHTML='Wyłączona';

})
document.querySelector('#radio1').addEventListener(type='click',function (){
    document.querySelector('img').setAttribute('src','zarowka — kopia.jpg')
    checkbox.checked=true;
    radio1.checked=true;
    tr.innerHTML='Włączona';
})
document.querySelector('#radio2').addEventListener(type='click',function (){
    document.querySelector('img').setAttribute('src','zarowka.jpg')
    checkbox.checked=false;
    radio2.checked=true;
    tr.innerHTML='Wyłączona';

})
checkbox.addEventListener('change',function (){
    if (checkbox.checked){
        tr.innerHTML='Włączona';
        checkbox.checked=true;
        radio1.checked=true;
        document.querySelector('img').setAttribute('src','zarowka — kopia.jpg')
    }
    else{
        tr.innerHTML='Wyłączona';
        checkbox.checked=false;
        radio2.checked=true;
        document.querySelector('img').setAttribute('src','zarowka.jpg')
    }
})





