// checkboxni ishlatish

function add(){
    var elLi = document.getElementById('li');
    var elInput = document.getElementById('check');

    if (elInput.checked == true){
        elLi.style.textDecorationLine = "line-through"; // ustiga chizish
    }
    else{
        elLi.style.textDecorationLine = "none";
    }

}