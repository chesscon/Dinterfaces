
var ERROR_NICKNAME = "El nickname debe tener al menos 3 carácteres";
var ERROR_EMAIL = "El email debe tener al menos 3 carácteres";
var ERROR_DELEGACION = "Seleccione la Delegación";
var ERROR_CP = "El Código Postal no es válido. Debe tener exactamente 5 números";
var MSJ_EXITOSO =
       "El registro se ha completado exitosamente! =)<br>&nbsp;<br>" +
       "<a href='' class='button tiny radius'>Ok!</a>";

// VALIDACIÓN DE FORMULARIO USANDO LA API DE JAVASCRIPT
function validaAPIJS(){
  var message = document.getElementById("notificacion");
  var nickname = document.getElementById("nickname");
  var email = document.getElementById("email");
  var delegacion = document.getElementById("delegacion");
  var cp = document.getElementById("cp");

  // Validando nickname (longitud > 2)
  if((nickname.value).length < 3){
    message.setAttribute("class","panel warning radius text-center");
    message.innerHTML = ERROR_NICKNAME;
    return false;
  }

  // Validando email (longitud > 2)
  else if((email.value).length < 3){
    message.setAttribute("class","panel warning radius text-center");
    message.innerHTML = ERROR_EMAIL;
    return false;
  }

  // Validando delegación (obligatoria)
  else if(delegacion.value == 0){
    message.setAttribute("class","panel warning radius text-center");
    message.innerHTML = ERROR_DELEGACION;
    return false;
  }

  // Validando Código Postal (longitud = 5)
  else if((cp.value).length != 5 || isNaN(cp.value)) {
    message.setAttribute("class","panel warning radius text-center");
    message.innerHTML = ERROR_CP;
    return false;
  }

  else{
    message.setAttribute("class","panel success radius text-center");
    message.innerHTML = MSJ_EXITOSO;
    return true; // Este caso debería retornar "true" si queremos que el formulario se envíe.
  }
}

function enviarDatosAjax () {
  var nickname = document.getElementById("nickname").value;
  var email = document.getElementById("email").value;
  var delegacion = document.getElementById("delegacion").value;
  var cp = document.getElementById("cp").value;
  var st = document.getElementById("notificacion");

  //zona de verificaciones
  if(validaAPIJS()){
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "registro.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    ajax.onreadystatechange = function() {
      if(ajax.status == 200 && ajax.readyState == 4){
        st.innerHTML = ajax.responseText;
      }
    }

    var cadena = "nickname=" + nickname;
    cadena += "&email=" + email;
    cadena += "&delegacion=" + delegacion;
    cadena += "&cp=" + cp;

    ajax.send(cadena);
  } 

  return false;

}

function cargaContenido(fileReq, fun) {

    var st = document.getElementById("contenido");

    var ajax = new XMLHttpRequest();

    ajax.open("GET", fileReq, true);

    ajax.onreadystatechange = function() {
      if(ajax.status == 200 && ajax.readyState == 4){
        st.innerHTML = ajax.responseText;
        fun();
      }
    }

    ajax.send();

  return false;

}

function cargaFormulario() {

    // Llenando los combos de DELEGACIÓN
  var delegaciones = new Array();
  
  delegaciones[0] = "Álvaro Obregón";
  delegaciones[1] = "Ázcapotzalco";
  delegaciones[2] = "Benito Juárez";
  delegaciones[3] = "Cuajimalpa de Morelos";
  delegaciones[4] = "Coyoacán";
  delegaciones[5] = "Cuauhtémoc";
  delegaciones[6] = "Gustavo A. Madero";
  delegaciones[7] = "Iztacalco";
  delegaciones[8] = "Iztapalapa";
  delegaciones[9] = "Magdalena Contreras";
  delegaciones[10] = "Miguel Hidalgo";
  delegaciones[11] = "Milpa Alta";
  delegaciones[12] = "Tláhuac";
  delegaciones[13] = "Tlalpan";
  delegaciones[14] = "Venustiano Carranza";
  delegaciones[15] = "Xochimilco";
  
  var combosDel = $("select[id*='delegacion']");
  //var combosDel = $("#delegacion");
  var options = "<option value='0'>Seleccione delegación:</option>";

  for(i=0; i<delegaciones.length; i++) {
    options += "<option>"+ delegaciones[i] +"</option>";
  }
  
  combosDel.each(function() {
    $(this).html(options);
  });

}

