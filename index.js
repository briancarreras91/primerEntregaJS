/*----------------------------------------------------Constantes y variables generales---------------------------------------------------*/

const userAdm = "admin";
const userUsuario = "usuario";
const passAdm = "admin";
const passUsuario = "123";
let inicia = confirm("Quiere utilizar nuestro programa para turnos medicos?");
/*----------------------------------------------------Clases---------------------------------------------------*/

class Profesional {
  constructor(id, nombre, especialidad) {
    this.id = id;
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.agendas = [];
  }
  verProf() {
    return (
      "* " + this.id + " " + this.nombre + " Especialidad:" + this.especialidad
    );
  }
  buscarPorId(id) {
    let i = 0;
    while (i < profesionales.length) {
      if (profesionales[i].id === id) {
        return profesionales[i];
      }
      i++;
    }
    return null;
  }
}

class Agenda {
  constructor(id, profesionalId, dia, horarios) {
    this.id = id;
    this.profesionalId = profesionalId;
    this.dia = dia;
    this.horarios = horarios;
    this.turnos = [];
  }
}

class Turno {
  constructor(usuario, profesionalId, agendaId, horario, dia) {
    this.usuario = usuario;
    this.profesionalId = profesionalId;
    this.agendaId = agendaId;
    this.horario = horario;
    this.dia = dia;
  }
}

const profesionales = [
  new Profesional(1, "Dra. Gómez", "Pediatría"),
  new Profesional(2, "Dr. Pérez", "Cardiología"),
  new Profesional(3, "Dra. López", "Dermatología"),
  new Profesional(4, "Dr. Martínez", "Neurología"),
  new Profesional(5, "Dra. Fernández", "Ginecología"),
  new Profesional(6, "Dr. Ramírez", "Traumatología"),
];
const agendas = [
  new Agenda(101, 1, "10/09/25", ["10:00", "11:00"]),
  new Agenda(102, 1, "11/09/25", ["14:00", "15:00"]),
  new Agenda(103, 2, "10/09/25", ["09:00", "10:30"]),
  new Agenda(104, 2, "30/09/25", ["13:00", "14:30"]),
  new Agenda(105, 3, "10/09/25", ["08:00", "09:30"]),
  new Agenda(106, 3, "13/09/25", ["15:00", "16:00"]),
  new Agenda(107, 4, "10/09/25", ["10:00", "11:30"]),
  new Agenda(108, 4, "28/09/25", ["12:00", "13:30"]),
  new Agenda(109, 5, "10/09/25", ["09:00", "10:00"]),
  new Agenda(110, 5, "23/09/25", ["11:00", "12:30"]),
  new Agenda(111, 6, "10/09/25", ["08:30", "09:30"]),
  new Agenda(112, 6, "20/09/25", ["14:00", "15:30"]),
];

const turnos = [];

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
  const opcionAd = prompt(
    "¿Qué desea hacer?\nIngrese el número de la opción que quiera realizar:\n\n1 - Ver agendas\n2 - Agregar profesionales\n3 - Agregar agendas\n4 - Salir del progrma"
  );
  switch (opcionAd) {
    case "1":
      alert("A continuacion mostraremos las agendas que tenemos disponibles");
      getAgendas();
      menuAdm();
      break;
    case "2":
      alert("Ingrese los datos del nuevo profesional");
      setProfesional();
      menuAdm();
      break;
    case "3":
      alert("Seleccione el profesional y asigne dia y horario");
      agregaAgenda();
      menuAdm();
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
  const opcionUs = prompt(
    "¿Qué desea hacer?\nIngrese el número de la opción que quiera realizar:\n\n1 - Sacar un turno\n2 - Ver profesionales\n3 - Ver agendas\n4 - Salir del progrma"
  );
  switch (opcionUs) {
    case "1":
      agregaTurno();
      menuUsuario();
      break;
    case "2":
      alert(
        "A continuacion mostraremos los profesionales que tenemos disponibles"
      );
      getProfesional();
      menuUsuario();
      break;
    case "3":
      alert("A continuacion mostraremos las agendas que tenemos disponibles");
      getAgendas();
      menuUsuario();
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

function agregaAgenda() {
  const idProf = parseInt(prompt("Ingrese el ID del profesional:"));
  const profesional = profesionales.find((p) => p.id === idProf);

  if (!profesional) {
    alert("Profesional no encontrado.");
    return;
  }

  const dia = prompt("Ingrese el día (ej: 10/09/25):");
  const horarios = [];

  while (true) {
    const input = prompt(
      "Ingrese un horario (o escriba 'salir' para terminar):"
    );

    if (input === "salir") break;
    if (input === "") {
      alert("El campo no puede estar vacío.");
    } else {
      horarios.push(input);
      alert(`Horario "${input}" agregado.`);
    }
  }

  if (horarios.length === 0) {
    alert("No se creó la agenda porque no se ingresaron horarios.");
    return;
  }

  const nuevaAgenda = new Agenda(
    agendas.length + 101,
    profesional.id,
    dia,
    horarios
  );
  agendas.push(nuevaAgenda);
  profesional.agendas.push(nuevaAgenda.id);

  alert("Agenda creada correctamente para " + profesional.nombre);
}

function getAgendas() {
  let mensaje = "Agendas por profesional:\n\n";

  profesionales.forEach((prof) => {
    mensaje += prof.verProf() + "\n";

    const agendasDelProfesional = agendas.filter(
      (agenda) => agenda.profesionalId === prof.id
    );

    if (agendasDelProfesional.length === 0) {
      mensaje += "  - Sin agendas asignadas\n\n";
    } else {
      agendasDelProfesional.forEach((agenda) => {
        mensaje += `  - Día: ${agenda.dia} | Horarios: ${agenda.horarios.join(
          ", "
        )}\n`;
      });
      mensaje += "\n";
    }
  });

  alert(mensaje);
}

function agregaTurno() {
  let mensaje = "Seleccione el profesional con el que desea sacar turno:\n";
  profesionales.forEach((p) => {
    mensaje += p.verProf() + "\n";
  });

  let selcProf = prompt(mensaje);
  if (selcProf === null) {
    if (confirm("¿Desea volver al inicio para sacar otro turno?")) {
      menuUsuario();
    }
    return;
  }

  while (isNaN(selcProf) || selcProf < 1 || selcProf > profesionales.length) {
    alert("Por favor, ingrese un ID de profesional válido.");
    selcProf = prompt(mensaje);
    if (selcProf === null) {
      if (confirm("¿Desea volver al inicio para sacar otro turno?")) {
        menuUsuario();
      }
      return;
    }
  }

  const profSeleccionado = profesionales.find((p) => p.id == selcProf);
  const agendasDelProfesional = agendas.filter(
    (agenda) => agenda.profesionalId == selcProf
  );

  if (agendasDelProfesional.length === 0) {
    alert("El profesional seleccionado no tiene agendas disponibles.");
    return;
  }

  let mensaje2 = `Agendas disponibles para ${profSeleccionado.nombre}:\n`;
  agendasDelProfesional.forEach((agenda) => {
    mensaje2 += `ID Agenda: ${agenda.id} - Día: ${
      agenda.dia
    } | Horarios: ${agenda.horarios.join(", ")}\n`;
  });

  let selcAgenda = prompt(mensaje2);
  if (selcAgenda === null) {
    if (confirm("¿Desea volver al inicio para sacar otro turno?")) {
      menuUsuario();
    }
    return;
  }

  while (
    isNaN(selcAgenda) ||
    !agendas.some((a) => a.id == selcAgenda && a.profesionalId == selcProf)
  ) {
    alert("Por favor, ingrese un ID de agenda válido.");
    selcAgenda = prompt(mensaje2);
    if (selcAgenda === null) {
      if (confirm("¿Desea volver al inicio para sacar otro turno?")) {
        menuUsuario();
      }
      return;
    }
  }

  const agendaSeleccionada = agendas.find((a) => a.id == selcAgenda);
  let mensaje3 = "Seleccione el horario que desea:\n";
  agendaSeleccionada.horarios.forEach((horario, index) => {
    mensaje3 += `${index + 1} - ${horario}\n`;
  });

  let selcHorario = prompt(mensaje3);
  if (selcHorario === null) {
    if (confirm("¿Desea volver al inicio para sacar otro turno?")) {
      menuUsuario();
    }
    return;
  }

  while (
    isNaN(selcHorario) ||
    selcHorario < 1 ||
    selcHorario > agendaSeleccionada.horarios.length
  ) {
    alert("Por favor, ingrese un número de horario válido.");
    selcHorario = prompt(mensaje3);
    if (selcHorario === null) {
      if (confirm("¿Desea volver al inicio para sacar otro turno?")) {
        menuUsuario();
      }
      return;
    }
  }

  const horarioSeleccionado = agendaSeleccionada.horarios[selcHorario - 1];
  const nuevoTurno = new Turno(
    userUsuario,
    profSeleccionado.id,
    agendaSeleccionada.id,
    horarioSeleccionado,
    agendaSeleccionada.dia
  );
  turnos.push(nuevoTurno);

  alert(
    "Turno confirmado:\nProfesional: ${profSeleccionado.nombre}\nDía: ${agendaSeleccionada.dia}\nHorario: ${horarioSeleccionado}"
  );
}

/*Profesionales*/

function getProfesional() {
  let mensaje = "Los profesionales actuales son: \n ";
  for (let i = 0; i < profesionales.length; i++) {
    mensaje += profesionales[i].verProf() + "\n";
  }
  alert(mensaje);
  menuUsuario();
}
function setProfesional() {
  const nombre = prompt(
    "Ingrese el nombre completo del profesional (ej: Dr. Pérez):"
  );
  const especialidad = prompt("Ingrese la especialidad (ej: Cardiología):");

  if (!nombre || !especialidad) {
    alert("Debe completar ambos campos.");
    return;
  }

  const nuevoId = profesionales.length + 1;
  const nuevoProfesional = new Profesional(nuevoId, nombre, especialidad);
  profesionales.push(nuevoProfesional);

  alert("Profesional agregado correctamente:\n" + nuevoProfesional.verProf());
  menuAdm();
}

/*----------------------------------------------------llamado la funcion principal----------------------------------------------------*/

programaJS();
