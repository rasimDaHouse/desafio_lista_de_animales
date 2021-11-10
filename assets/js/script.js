class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el numero teléfonico de contacto: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombre) {
    this._nombreMascota = nuevoNombre;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let propietario = document.getElementById("propietario").value;
  let numeroTelefonico = document.getElementById("telefono").value;
  let lugarResidencia = document.getElementById("direccion").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let tipo = document.getElementById("tipo").value;
  let motivoConsulta = document.getElementById("enfermedad").value;

  if (tipo === "perro") {
    let perro = new Mascota(
      propietario,
      lugarResidencia,
      numeroTelefonico,
      tipo,
      nombreMascota,
      motivoConsulta
    );
    mostrar(perro);
  } else if (tipo === "gato") {
    let gato = new Mascota(
      propietario,
      lugarResidencia,
      numeroTelefonico,
      tipo,
      nombreMascota,
      motivoConsulta
    );
    mostrar(gato);
  } else {
    let conejo = new Mascota(
      propietario,
      lugarResidencia,
      numeroTelefonico,
      tipo,
      nombreMascota,
      motivoConsulta
    );
    mostrar(conejo);
  }
});

const mostrar = (dato) => {
  let resultado = document.querySelector("#resultado ul");
  resultado.innerHTML = "";

  let elemento1 = document.createElement("li");

  elemento1.innerHTML = dato.datosPropietario();
  resultado.appendChild(elemento1);

  let elemento2 = document.createElement("li");
  let cadenaTexto = `${dato.tipo}, mientras que el nombre de la mascota es: ${dato.nombreMascota} y la enfermedad es: ${dato.enfermedad}`;
  elemento2.innerHTML = cadenaTexto;
  resultado.appendChild(elemento2);
};
