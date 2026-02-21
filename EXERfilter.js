const notas = [4, 7, 9, 3, 10, 5];

console.log("Notas originais:", notas);

const resultado=notas.filter(function (notas) {
    return notas >= 7
})
console.log("as notas maiores ou iguais a sete são:", resultado);
