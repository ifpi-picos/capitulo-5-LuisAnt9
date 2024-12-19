/*4. Desenvolva um programa que receba o ano de nascimento de uma pessoa e informe se
ela já é maior de idade ou não..*/

const anoAtual = 2024
const anoNasc = parseInt(prompt('Em que ano você nasceu ?'))

const soma = anoAtual - anoNasc

if(soma >= 18){
    console.log('Você é MAIOR de idade')
}else{
    console.log('Você é MENOR de idade ')
}