/*5. Faça um programa que converte uma temperatura de Celsius para Fahrenheit ou vice-
-versa, dependendo da escolha do usuário.*/

function converterTemperatura() {
    let temperatura = parseFloat(prompt("Digite a temperatura:"))
    let tipoConversao = prompt("Escolha a conversão:\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius")

    let resultado;

    if (tipoConversao === "1") {
        resultado = (temperatura * 9/5) + 32
        alert(`${temperatura}°C é igual a ${resultado}°F`)
    } else if (tipoConversao === "2") {
        resultado = (temperatura - 32) * 5/9
        alert(`${temperatura}°F é igual a ${resultado}°C`)
    } else {
        alert("Opção inválida!")
    }
}

converterTemperatura()
