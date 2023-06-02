//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
//Validando formulario
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");
var error1 = document.getElementById("error1");
error1.style.color = "red";

 function registrandose() {
    console.log('se esta registrando...');

    var mensajeError = [];
    if (nombre.value === null || nombre.value === "") {
        mensajeError.push("escribre un nombre-");
    }
    if (email.value === null || email.value === "") {
        mensajeError.push("escribre un email-");
    }
    if (usuario.value === null || usuario.value === "") {
        mensajeError.push("escribre tu usuario-");
    }
    if (contraseña.value === null || contraseña.value === "") {
        mensajeError.push("escribre una contraseña");
    }

    error1.innerHTML = mensajeError.join(", ");

    return false;
 }

//Base de Datos con IndexedDB

var bd;

function IniciarBaseDatos()
  {
    var BtnGuardar = document.querySelector("#btn-guardar");
    BtnGuardar.addEventListener("click", AlmacenarContacto)

    var solicitud = indexedDB.open("Datos-De-formulario");

    solicitud.addEventListener("error", MostrarError);
    solicitud.addEventListener("success", Comenzar);
    solicitud.addEventListener("upgradeneeded", CrearAlmacen);
  }

function MostrarError(evento)
  {
      alert("Tenemos un ERROR: " + evento.code + " / " + evento.message);
  }

function Comenzar(evento)
  {
      bd = evento.target.result;
      console.log("funcion comenzar");
  }

function CrearAlmacen(evento)
  {
      var basededatos = evento.target.result;
      var almacen = basededatos.createObjectStore("Contactos", {keyPath: "email"});
      almacen.createIndex("BuscarNombre", "nombre", {unique: false});
      console.log("funcion CrearAlmacen");
  }
  function AlmacenarContacto(){
    var N = document.querySelector("#nombre").value;
    var E = document.querySelector("#email").value;
    var U = document.querySelector("#usuario").value;
    var C = document.querySelector("#contraseña").value;

    var transaction = bd.transaction(["Contactos"], "readwrite");
    var almacen = transaction.objectStore("Contactos");

    almacen.add({
                 nombre: N,
                 email: E,
                 usuario: U,
                 contraseña: C
    });

    document.querySelector("#nombre").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#usuario").value = "";
    document.querySelector("#contraseña").value = "";
  }
window.addEventListener("load", IniciarBaseDatos);