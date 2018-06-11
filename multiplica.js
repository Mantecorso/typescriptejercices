let tabla = prompt("indicame la tabla de multiplicar");

let opera = (multiplica) => {
    if (typeof multiplica !== 'number') {
        throw new Error('Debe recibir un numero');
    } else {
        for (var i = 0; i <= 10; i++) {
            console.log(i*multiplica);
        };
    }
}