/*----------------------------------------------------Constantes y variables generales---------------------------------------------------*/

const userAdm = "admin";
const userUsuario = "usuario";
const passAdm = "admin";
const passUsuario = "12345678";
let inicia = confirm("Quiere utilizar nuestro programa para turnos medicos?");

/*----------------------------------------------------Funciones----------------------------------------------------*/

function programaJS() {
  if (inicia) {
    login();
  } else {
    despedida();
  }
}

function login() {
  let continuar = true;

  while (continuar) {
    const usuario = prompt("Ingrese su usuario:");
    const password = prompt("Ingrese su contraseña:");

    if (usuario === userAdm && password === passAdm) {
      alert("Bienvenido Administrador");
      menuAdm();
      continuar = false;
    } else if (usuario === userUsuario && password === passUsuario) {
      alert("Bienvenido Usuario");
      menuUsuario();
      continuar = false;
    } else {
      alert("Credenciales incorrectas");
      continuar = confirm("¿Deseás intentar nuevamente?");
      if (!continuar) {
        despedida();
      }
    }
  }
}

function despedida() {
  alert("Hasta luego, si quiere iniciar nuevamente, actualice la pagina");
}

/*----------------------------------------------------Programa general----------------------------------------------------*/

programaJS();
