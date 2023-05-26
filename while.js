document.querySelector('#generuj').addEventListener("click",function (){
   const tabela=document.querySelector('#tabela');
    const kolumna_input=document.querySelector("#kolumna");
    const kolumna=parseInt(kolumna_input.value);
    const wiersz_input=document.querySelector("#wiersz");
    const wiersz=parseInt(wiersz_input.value);
    console.log(kolumna);
    console.log(wiersz);
    let k=1;
    let w=1;
    while (w<=wiersz){
       const tabela_wiersz=document.createElement('tr');

        while (k<=kolumna){
            const td=document.createElement('td')
            tabela.appendChild(td);
            td.innerHTML=k+'|'+w;
            k++;
        }
        w++;
        k=1;
        tabela.appendChild(tabela_wiersz);
    }

})

