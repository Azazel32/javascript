function jezus (){
    alert('To jest proste wywołanie okna')
}
function hal (){
    alert("Możesz być z siebie dumny")
}
document.querySelector('#zgadzam')
addEventListener('click',()=>{tak()});


function be(){
    if (confirm("Czy jesteś pewien by kontynuować")) {
        alert("No to kontynuuj");
    } else {
        alert("Przykro mi że nie chcesz");
    }

}
document.querySelector('#c')
addEventListener('click',()=>{nie()});