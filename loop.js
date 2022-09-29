var res = 0;

 for(i = 1; i <= 5; i++){
 var n = parseInt(prompt("Digite o " + i + "° número"));
 var n1;

 if(i == 1){
  n1 = n;
  document.write("Primeiro número digitado é " + parseInt(n1));
  document.write("<br>");
 }

 else if(i == 2){
  aux = n1 * n;
  res = aux;
  document.write("Número digitado foi " + n + " a multiplicação com " + n1 + " = " + res);
  document.write("<br>");
 }

 else if(i == 3){
  aux = aux / n;
  res = aux;
  document.write("Número digitado foi " + n + " resultado da divisão entre o número anterioro e esse é " + res);
  document.write("<br>");
 }

 else if(i == 4){
  aux = n + aux;
  res = aux;
  document.write("Número digitado foi " + n + " resultado da soma entre o número anterior e esse é " + res);
  document.write("<br>");
 }

 else if(i == 5){
  aux = aux - n;
  res = aux;
  document.write("Número digitado foi " + n + " resultado da subtração entre o número anterior e esse é " + res);
  document.write("<br>");
 }
}
