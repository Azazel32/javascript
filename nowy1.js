const a = document.querySelector('header');
console.log(a);
a.style.backgroundColor="Yellow";

const b = document.querySelector
('header h1')
console.log(b);
b.style.fontStyle="Arial Black";
b.innerHTML="Preambula";


const c = document.getElementsByTagName
("section");
for(const element of c)
{
    element.style.border= "2px solid Brown";
}
console.log(c);

const d=document.querySelector("section.main_column")
console.log(d)
d.innerHTML = "Specjalność szefa";

const e=document.querySelector('.main_column')
console.log({e});
const akapit=document.createElement('p');
akapit.innerHTML="Kebab na frytkach _-_";
e.appendChild(akapit);

const f=document.querySelectorAll('section.side_column h1');
console.log({f});
f[1].remove();

const h=document.querySelector("footer");
console.log(h);
const diw=document.createElement('div');
diw.style.backgroundColor="pink";


