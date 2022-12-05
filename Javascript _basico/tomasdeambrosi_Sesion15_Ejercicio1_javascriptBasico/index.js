const nombre = "Tomás"

const apellido = "Deambrosi"

const info = {
    nombre,
    apellido
}

// sessionStorage.setItem("persona", JSON.stringify(info))

// localStorage.setItem("persona", JSON.stringify(info))

const fecha = new Date()
const fechaMasDosMinutos = new Date(fecha.setMinutes(fecha.getMinutes() + 2));
// document.cookie = `persona=${JSON.stringify(info)};expires=${fechaMasDosMinutos}`