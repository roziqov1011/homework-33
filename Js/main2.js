// array ga element qo'shib borish
var array = [];
function add() {
    var elInput = document.getElementById('input').value.trim();
    array.push(elInput);
    document.getElementById('box').innerHTML = "";
    for (var list of array){
        var elText = document.createElement("li"); // Create a <P> element
        elText.innerHTML=list;
        document.getElementById("box").appendChild(elText);
    }
    console.log(array);
}
