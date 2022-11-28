let nombre = "Tomas";
let apellido = "Deambrosi";

let estudiante = nombre.concat(" ", apellido);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numeroDeLetras = estudiante.length;

let primeraLetraNombre = nombre.charAt(0);
let ultimaLetraApellido = apellido.charAt(apellido.length-1);

let eliminarEspacios = estudiante.replace(/ /, "");

let estaIncluido = estudiante.includes(`${nombre}`);