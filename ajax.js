function Ajax(){
var xmlhttp=false;
try {
xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {
xmlhttp = false;
}
}

if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
xmlhttp = new XMLHttpRequest();
}
return xmlhttp;
}



function guardarUsuario() 
{ 
var guardando = document.getElementById('guardando');
guardando= '<img src="img/loading.gif">';
var documento= encodeURI(document.getElementByName('documento').v alue);
var expedicion = encodeURI(document.getElementByName('expedicion'). value); 
var ajax = Ajax();
ajax.open("POST", "funciones.php",true);
ajax.onreadystatechange=guardarUsuarioBD;
ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
ajax.send("documento="+documento+"&expedicion="+ex pedicion)
}
function guardarUsuarioBD() {
if (ajax.readyState==4){
if (http_request.status == 200) {
guardando.innerHTML= ajax.responseText; 
LimpiarCampos(); 
} }


}

function LimpiarCampos(){
document.getElementsByName("documento").value="";
document.getElementsByName("expedicion").value="";

}
