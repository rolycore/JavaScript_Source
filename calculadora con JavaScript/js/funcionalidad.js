var operandora;
var operandorb;
var operacion;
function init(){
  //variables
    var resultado = document.getElementById("resultado");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var mutiplicacion = document.getElementById("mutiplicacion");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var reset = document.getElementById("reset");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");

  //eventos
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick = function(e) {
      resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
    resetear();
}

suma.onclick = function(e){
 operandora = resultado.textContent;
 operacion = "+";
   limpiar();
}
resta.onclick = function(e){
    operandora = resultado.textContent;
    operacion = "-";
      limpiar();
   }
   mutiplicacion.onclick = function(e){
    operandora = resultado.textContent;
    operacion = "*";
      limpiar();
   }
   division.onclick = function(e){
    operandora = resultado.textContent;
    operacion = "/";
      limpiar();
   }

   igual.onclick = function(e){
    operandorb = resultado.textContent;
      resolver();
   }

}

//metodos

function limpiar(){
    resultado.textContent ="";
}

function resetear(){
    resultado.textContent ="";
    operandora = 0;
    operandorb = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandora) + parseFloat(operandorb)
            break;
            case "-":
                res = parseFloat(operandora) - parseFloat(operandorb)
            break;
        case "*":
            res = parseFloat(operandora) * parseFloat(operandorb)    
            break;
        case "/":
            res = parseFloat(operandora) / parseFloat(operandorb)
            break;
    
        }
        resetear();
        resultado.textContent = res;
}
