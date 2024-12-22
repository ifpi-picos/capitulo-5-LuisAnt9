/* 6. Escreva um programa que solicite dois números ao usuário e verifique se pelo menos
um deles é múltiplo do outro. Se pelo menos um for múltiplo, exiba a mensagem
“Pelo menos um dos números é múltiplo do outro”. Caso contrário, exiba a mensagem
“Nenhum dos números é múltiplo do outro”.*/

function verificarMultiplo() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"))
    let numero2 = parseInt(prompt("Digite o segundo número:"))

    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        alert("Pelo menos um dos números é múltiplo do outro")
    } else {
        alert("Nenhum dos números é múltiplo do outro")
    }
}

verificarMultiplo()
