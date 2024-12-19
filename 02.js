/*2. Escreva um programa que peça ao usuário para inserir três números e, em seguida,
imprima o maior deles.*/

let num1 = parseInt(prompt('Insira um número : '))
let num2 = parseInt(prompt('Insira outro número : '))
let num3 = parseInt(prompt('Insira mais um número : '))

if(num1 >= num2 && num1 >= num3){
    console.log(`O maior número digitado foi ${num1}`)
}else if(num2 >= num1 && num2 >= num3){
    console.log(`O maior número digitado foi ${num2}`)
}else{
    console.log(`O maior número digitado foi ${num3}`)
}
