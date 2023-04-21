let miesiac=Math.floor(Math.random()*15+1);
const miesiach1=document.querySelector('#miesiach1');
const miesiach3=document.querySelector('#miesiach3');
miesiach1.innerHTML=miesiac ;
switch (miesiac){
    case 1:
    case 2:
    case 3:
        miesiach3.innerHTML="I kwartal";
    break;
    case 4:
    case 5:
    case 6:
        miesiach3.innerHTML="II kwartal";
        break;
    case 7:
    case 8:
    case 9:
        miesiach3.innerHTML="III kwartal";
        break;
    case 10 :
    case 11:
    case 12:
        miesiach3.innerHTML="IV kwartal";
        break;
    default:
        miesiach3.innerHTML="Błędny numer miesiaca";
}
