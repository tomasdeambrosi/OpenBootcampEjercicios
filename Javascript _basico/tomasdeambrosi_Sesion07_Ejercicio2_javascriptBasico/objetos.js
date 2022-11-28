let persona = {
    nombre: "Tomas",
    apellido: "Deambrosi",
    edad: 30,
    altura: 1.82,
    eresDesarrollador: false
}

let años = "edad";
console.log(persona[años]); 

let lista = [
    {
        ...persona
    }, {
        nombre: "Norma",
        apellido: "López",
        edad: 32,
        altura: 1.68,
        eresDesarrollador: false
    }, {
        nombre: "Julio",
        apellido: "Godoy",
        edad: 28,
        altura: 1.9,
        eresDesarrollador: false
    }
]

let listaDos = lista.sort((a, b) => b.edad - a.edad);
console.log(listaDos);