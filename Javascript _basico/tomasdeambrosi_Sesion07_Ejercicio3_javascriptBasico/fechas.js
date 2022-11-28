let fechaActual = new Date();

let fechaNacimiento = new Date(1992, 0, 20);

let esMasTarde = fechaActual > fechaNacimiento;

let diaNacimiento = fechaNacimiento.getDay();

let mesNacimiento = fechaNacimiento.getMonth() + 1;

let anyoNacimiento = fechaNacimiento.getFullYear();