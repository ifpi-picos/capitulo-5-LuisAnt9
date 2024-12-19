/*Implemente um programa que determine se um número fornecido pelo usuário é par
ou ímpar.*/

let numero = parseInt(prompt('Digite um número: '))

if(numero % 2 === 0){
    console.log('O número é PAR')
}else{
    console.log('O número é IMPAR')
}