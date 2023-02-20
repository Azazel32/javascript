const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
button1.addEventListener(type = 'click', function () {
    const button1 = document.querySelector('h6');
    button1.innerHTML = 'Swietnie!'
});
button2.addEventListener(type = 'click', function () {
    const button2 = document.querySelector('h5');
    button2.innerText = 'Swietnie!'
});
button3.addEventListener(type = 'click', function () {
    const div = document.querySelectorAll('#divek');
    const a = document.querySelectorAll("*");
    console.log(a);
    for (const t of a) {
        if (t.tagName === "STRONG") {
            t.style.border = '10px dotted green';
        }
    }
})
document.querySelector("#buton4").addEventListener(type='click',function (){
        const zadanie=document.querySelector('#tytul').getAttribute('title');
        alert(zadanie);
    })
document.querySelector('#buton5').addEventListener(type='click',function (){
    const inna=document.querySelector('#przycik');
    console.log(inna);
    inna.setAttribute("dir","rtl");
})


