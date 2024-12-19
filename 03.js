/*3. Crie um programa que receba três notas, calcula a média e informe se o aluno foi
aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).*/

let nota1 = Number(prompt('Primeira nota: '))
let nota2 = Number(prompt('Segunda nota: '))
let nota3 = Number(prompt('Terceira nota: '))

let media = (nota1 + nota2 + nota3)/3
console.log(`Média :${media}`)

if(media >= 7){
    console.log('Situação : APROVADO')
}else{
    console.log('Situação : REPROVADO')
}