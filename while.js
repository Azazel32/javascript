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
       tabela.appendChild(tabela_wiersz);
        while (k<=kolumna){
            const td=document.createElement('td')
            tabela_wiersz.appendChild(td);

            k++;
        }
        w++;
    }
    k=1;
})

function populateTable(){
    letters = ["a", "b", "c", "d", "e"]
    numbers = ["1", "2", "3", "4", "5"]

    for(let i = 0; i < numbers.length; i++){
        document.getElementById("the-table").innerHTML += "<tr>"
        for(let j = 0; j < letters.length; j++){
            document.getElementById("the-table").innerHTML += "<td>" + letters[j] + numbers[i] + "</td>"
        }
        document.getElementById("the-table").innerHTML += "</tr>"
    }
}