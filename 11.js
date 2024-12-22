/*11. Escreva um programa que solicite ao usuário um número positivo e exiba todos os
números ímpares de 0 até o número informado (use o laço de repetição for).*/

function exibirImpares() {
    let numero = parseInt(prompt("Digite um número positivo:"))

    if (numero <= 0) {
        alert("Por favor, digite um número positivo.")
        return
    }

    for (let i = 1; i <= numero; i += 2) {
        alert(i)
    }
}

exibirImpares()
