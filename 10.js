/*10. Escreva um programa que solicite ao usuário um número positivo e exiba todos os
números pares de 0 até o número informado (use o laço de repetição while).*/

function exibirPares() {
    let numero = parseInt(prompt("Digite um número positivo:"))

    if (numero <= 0) {
        alert("Por favor, digite um número positivo.")
        return
    }

    let i = 0

    while (i <= numero) {
        if (i % 2 === 0) {
            alert(i)
        }
        i++
    }
}

exibirPares()
