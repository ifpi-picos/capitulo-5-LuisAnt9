/*12. Crie um programa que calcule o fatorial de um número fornecido pelo usuário.*/

function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular seu fatorial:"))

    if (numero < 0) {
        alert("Por favor, digite um número positivo.")
        return;
    }

    let fatorial = 1

    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }

    alert(`O fatorial de ${numero} é ${fatorial}.`)
}

calcularFatorial()
