// tezlikni solishtirish 

TEZ_P = 5;
TEZ_V = 20;
TEZ_M = 70;

function add(){
    var elInput = parseInt(document.getElementById('input').value.trim(),10);
    var piyoda = elInput/TEZ_P;
    var velisipedda = elInput/TEZ_V;
    var mashinada = elInput/TEZ_M;
    document.getElementById('p').innerHTML = piyoda + ' soat';
    document.getElementById('v').innerHTML = velisipedda +' soat';
    document.getElementById('m').innerHTML = mashinada +' soat';
}