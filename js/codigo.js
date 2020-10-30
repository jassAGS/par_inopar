
function parono(numero){
  var probar =numero;
  var texto ="";
  if((probar%2)==0){
    texto ="es par";
  }else{
    texto="no es par";
  }

  alert(texto);
}
var numero = prompt("ingrese el numero");

parono(numero);

