/*----------------------------------------------------Constantes y variables generales---------------------------------------------------*/

const userAdm = "admin";
const userUsuario = "usuario";
const passAdm = "admin";
const passUsuario = "12345678";
let inicia = confirm("Quiere utilizar nuestro programa para turnos medicos?");
const profesional = {
  id: 1,
  nombre: "Dra. Gómez",
  especialidad: "Pediatría",
  agendas: [],
};
const agenda = {
  id: 101,
  profesionalId: 1,
  dia: "10/09/25",
  horarios: ["10:00", "11:00", "14:00"],
  turnos: [],
};
const turno = {
  usuario: "usuario",
  profesionalId: 1,
  agendaId: 101,
  horario: "10:00",
  dia: "10/09/25",
};

/*----------------------------------------------------Funciones----------------------------------------------------*/

function programaJS() {
  if (inicia) {
    login();
  } else {
    despedida();
  }
}
/*Validacion de us y pw*/
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

/*Funciones administrador*/
function menuAdm() {
  const opcion = prompt(
    "¿Qué desea hacer?\nIngrese el número de la opción que quiera realizar:\n\n1 - Ver agendas\n2 - Agregar profesionales\n3 - Agregar agendas\n4 - Salir del progrma"
  );
  switch (opcion) {
    case "1":
      alert("Ingrese el numero del profesional que desee ver su agenda ");
      getAgendas();
      break;
    case "2":
      alert("Ingrese los datos del nuevo profesional");
      setProfesional();
      break;
    case "3":
      alert("Seleccione el profesional y asigne dia y horario");
      agregaAgenda();

      break;
    case "4":
      despedida();
      break;
    default:
      alert("Opción inválida");
      menuAdm();
  }
}
/*Funciones usuario*/
function menuUsuario() {
  const opcion = prompt(
    "¿Qué desea hacer?\nIngrese el número de la opción que quiera realizar:\n\n1 - Sacar un turno\n2 - Ver profesionales\n3 - Ver agendas\n4 - Salir del progrma"
  );
  switch (opcion) {
    case "1":
      alert(
        "Ingrese el numero del profesional con el que desee tomar un turno "
      );
      setAgenda();
      break;
    case "2":
      alert(
        "A continuacion mostraremos los profesionales que tenemos disponibles"
      );
      getProfesional();
      break;
    case "3":
      alert("Ingrese el numero del profesional que quiera ver su agenda");
      getAgendas();

      break;
    case "4":
      despedida();
      break;
    default:
      alert("Opción inválida");
      menuUsuario();
  }
}
/*Agendas*/

function agregaAgendaAgendas() {}
function getAgendas() {}
function setAgendas() {}

/*Profesionales*/

function getProfesional() {}
function setProfesional() {}

/*----------------------------------------------------llamado la funcion principal----------------------------------------------------*/

programaJS();
