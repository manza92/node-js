let personas = {
  persona1: {
    nombre: "Juan",
    edad: 25,
    ciudad: "Tegucigalpa"
  },
  persona2: {
    nombre: "María",
    edad: 30,
    ciudad: "San Pedro Sula"
  }
};

function obtenerPersonas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(personas).length > 0) {
        resolve(personas);
      } else {
        reject("No se encontraron personas.");
      }
    }, 2000);
  });
}

obtenerPersonas()
  .then((personas) => console.log(personas))
  .catch((error) => console.log(error));
