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
document.querySelector("#buton4").addEventListener(type = '', function () {
    const zadanie = document.querySelector('#tytul').getAttribute('title');
    alert(zadanie);
})
document.querySelector('#buton5').addEventListener(type = 'click', function () {
    const inna = document.querySelector('#przycik');
    console.log(inna);
    inna.setAttribute("dir", "rtl");
})
document.querySelector('#button6').addEventListener('click', function () {
    const a = document.querySelector('#input1')

    a.toggleAttribute("disabled")
    const e = document.querySelector('#button6')
    if (a.hasAttribute('disabled')) {
        e.innerHTML = 'nie mozna edytować';
    } else {
        e.innerHTML = 'mozna edytowac';
    }
})
const paragraf1 = document.querySelector('#paragraf');
const href = document.querySelector('#href');
document.querySelector('#button7').addEventListener(type = 'click', function () {
    href.removeAttribute('href')
    paragraf1.removeAttribute('style')
})
document.querySelector('#button8').addEventListener(type = 'click', function () {
    console.log(document.querySelector('#h3').dataset)
    console.log(document.querySelector('#h3').attributes)
    const datasetAttributesElement=document.querySelector('#h3');
    const kontener=document.querySelector('#div2');
    for (const attribute of datasetAttributesElement.attributes){
        let para=document.createElement('p');
        para.innerHTML="Atrybut:<b>"+attribute.nodeName+"</b> ma wartosc:</b>" +attribute.nodeValue+"</b>";
        kontener.appendChild(para);
    }
})
document.querySelector('#button9').addEventListener('click',function hexColor() {
    const box = document.querySelector('#textarena');
    const colorHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    box.setAttribute('style', `background-color: ${colorHex}; border: 1px solid`);
    console.log(colorHex);
})




