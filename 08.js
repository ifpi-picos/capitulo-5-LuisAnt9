/*8. Crie um programa que simula um restaurante. O usuário escolhe um prato do menu
(opções: pizza, hambúrguer, salada, macarrão) usando a instrução switch. Para cada
prato escolhido, exiba o preço e a descrição do prato.*/

let menu = parseInt(prompt(' 1-Pizza\n 2-Hambúrguer\n 3-Salada\n 4-Macarrão\n'))

switch(menu){
    case 1:
        console.log('Você escolheu a Pizza')
        break
    case 2:
        console.log('Você escolheu o Hambúrguer')
        break
    case 3:
        console.log('Você escolheu a Salada')
        break
    case 4:
        console.log('Você escolheu o Macarrão')
        break
    default:
        console.log('Pedido Inválido')
}