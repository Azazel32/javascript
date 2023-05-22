

document.querySelector('#generuj').addEventListener('click', function (){
    const losowa=Math.floor(Math.random()*40+1);

        if (losowa%2 && losowa<10){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest nieparzysta i mniejsza  20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 1 dziesiatce";
        }
        else if (losowa<10){
        document.querySelector('h1').innerHTML=losowa;
        document.querySelector('h2').innerHTML="wylosowana liczba jest nieparzysta i mniejsza  20";
        document.querySelector('h2').innerHTML="wylosowana liczba jest w 1 dziesiatce";
        }
        else if (losowa%2 && losowa>=10 && losowa<20){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest nieprzysta i mniejsza od 20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 2 dziesiatce";
        }
        else if (losowa>=10 && losowa<20){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest przysta i mniejsza od 20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 2 dziesiatce";

        }
        else if (losowa>=20 && losowa%2 && losowa<30){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest nieprzysta i mniejsza 20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 3 dziesiatce";
        }
        else if (losowa>=20 && losowa<30){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest przysta i większa lub rowna 20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 3 dziesiatce";
        }
        else if (losowa>=30 && losowa%2 && losowa<40){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest nieprzysta i mniejsza 20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 4 dziesiatce";
        }
        else if (losowa>=30 && losowa<40){
            document.querySelector('h1').innerHTML=losowa;
            document.querySelector('h2').innerHTML="wylosowana liczba jest przysta i większa lub rowna 20";
            document.querySelector('h2').innerHTML="wylosowana liczba jest w 4 dziesiatce";
        }
        });





