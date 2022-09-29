function calcular(){
    let res;
    let n1 = parseInt(document.getElementById('primeiroNumero').value, 10);
    let n2 = parseInt(document.getElementById('segundoNumero').value, 10);
    let n3 = parseInt(document.getElementById('terceiroNumero').value, 10);
    let n4 = parseInt(document.getElementById('quartoNumero').value, 10);
    let n5 = parseInt(document.getElementById('quintoNumero').value, 10);
   
   
    res = ((((n1 * n2) / n3) + n4) - n5);
   
   
    document.getElementById('resultado').innerHTML = aux;
    }  