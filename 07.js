/* 7. Escreva um programa que peça ao usuário o valor de três lados de um triângulo e
classifique-o como triângulo equilátero, isósceles, escaleno ou inválido.*/

function classificarTriangulo() {

    let lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"))
    let lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"))
    let lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"))

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || 
        lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        alert("Os valores fornecidos não formam um triângulo válido.")
    } else {
        if (lado1 === lado2 && lado2 === lado3) {
            alert("O triângulo é Equilátero.")
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            alert("O triângulo é Isósceles.")
        } else {
            alert("O triângulo é Escaleno.")
        }
    }
}

classificarTriangulo()
