function fibo(num){
    numeroUno = 0;
    numeroDos = 1;
    numeroTres = 0;
    lista = []
    lista.push(numeroDos);
    for(let i = 0; i < (num -1); i++){
        numeroTres = (numeroUno += numeroDos);
        numeroUno = numeroDos;
        numeroDos = numeroTres;
        lista = [...lista, numeroTres]
    }
    console.log(lista);
}


const prueba = fibo(10);
console.log(prueba);
