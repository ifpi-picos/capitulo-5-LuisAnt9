/*13. Implemente um jogo de adivinhação onde o computador gera um número aleatório
entre 1 e 100 e o usuário tem que adivinhar qual é em até 10 tentativas. Verifique se
cada palpite do usuário está correto, menor ou maior do que o número secreto. Exiba
mensagens informando o resultado de cada tentativa e forneça pistas (menor/maior)
para ajudar o usuário. Para gerar um número aleatório entre 0 e 100 em JavaScript
podemos usar Math.floor(Math.random() * 101), onde Math.random() retorna um
valor entre 0 (inclusive) e 1 (exclusivo), multiplicado por 101 para incluir o 100, e
Math.floor() arredonda o resultado para o número inteiro mais próximo.*/

function jogarAdivinhacao() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1
    let tentativas = 0
    let palpite
    const maxTentativas = 10

    while (tentativas < maxTentativas) {
        palpite = parseInt(prompt(`Tentativa ${tentativas + 1} de ${maxTentativas}\nDigite um número entre 1 e 100:`))

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            alert("Por favor, digite um número válido entre 1 e 100.")
            continue
        }

        tentativas++

        if (palpite === numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`)
            break
        } else if (palpite < numeroSecreto) {
            alert("O número secreto é maior. Tente novamente.")
        } else {
            alert("O número secreto é menor. Tente novamente.")
        }
    }

    if (tentativas === maxTentativas && palpite !== numeroSecreto) {
        alert(`Você não acertou o número secreto. O número era ${numeroSecreto}.`)
    }
}

jogarAdivinhacao()
