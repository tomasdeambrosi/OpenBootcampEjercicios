const b = document.getElementById("boton")

b.addEventListener("click", evento => {
    alert("click en el botón")
})


$(document).ready(() => {

    $("button").click(() => {
        console.log("Hola, estoy utilizando JQuery")
    })

})