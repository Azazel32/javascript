const spany=document.getElementsByClassName('span');
const promt=prompt('podaj liczbe');
for (const NUM of spany){
NUM.innerHTML=promt;
}
document.getElementsByName('h1').innerHTML="twoja liczba to "+ promt;
document.getElementById('1').innerHTML="funckja abs("+promt+")="+Math.abs(promt);
document.getElementById('2').innerHTML="funckja ceil("+promt+")="+Math.ceil(promt);
document.getElementById('3').innerHTML="funckja floor("+promt+")="+Math.floor(promt);
document.getElementById('4').innerHTML="funckja max("+promt+")="+Math.max(promt);
document.getElementById('5').innerHTML="funckja min("+promt+")="+Math.min(promt);
document.getElementById('6').innerHTML="funckja round("+promt+")="+Math.round(promt);
document.getElementById('7').innerHTML="funckja pow("+promt+")="+Math.pow(promt,2);
document.getElementById('8').innerHTML="funckja sqrt("+promt+")="+Math.sqrt(promt);