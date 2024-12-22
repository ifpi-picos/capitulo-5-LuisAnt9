/*9. Escreva um programa que peça ao usuário sua altura e peso, calcule o IMC (Índice de
    Massa Corporal) e classifique conforme a tabela da OMS (abaixo do peso, peso normal,
    sobrepeso, obesidade). Exiba o valor do IMC e a classificação usando a instrução switch.*/

    function calcularIMC() {
        let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"))
        let peso = parseFloat(prompt("Digite seu peso em kg (ex: 70):"))
    
        let imc = peso / (altura * altura)
    
        imc = imc.toFixed(2)
    
        let classificacao
        switch (true) {
            case (imc < 18.5):
                classificacao = "Abaixo do peso"
                break;
            case (imc >= 18.5 && imc < 24.9):
                classificacao = "Peso normal"
                break;
            case (imc >= 25 && imc < 29.9):
                classificacao = "Sobrepeso"
                break;
            case (imc >= 30):
                classificacao = "Obesidade"
                break;
            default:
                classificacao = "Valor inválido"
                break;
        }
    
        alert(`Seu IMC é ${imc}. Classificação: ${classificacao}`)
    }
    
    calcularIMC()
    