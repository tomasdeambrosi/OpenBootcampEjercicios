function funcionUno() {
    return true
}


async function funcionDos() {
    return setTimeout(() => console.log("Soy una promesa"), 5000);
}


function* funcionTres(){
    let id = 0;
    while(true) {
        yield id += 2;
    }
}
