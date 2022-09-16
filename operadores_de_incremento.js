alert ('olá')// mostrar msg para o usuário alert
const nomeUs = prompt( "qual, o seu nome?");

let num = Number(prompt("Olá, "+ nomeUs + ', digite um número'))
//console.log(typeof num)// retorna o tipo do valor que a var armazena


//operador de incremento
//const sucessor = num++ // = num+1

//alert('o sucessor de , ' + num  +' é '+ sucessor)

console.log(num++)//num +1 =5// operador de pós-incremento
console.log(num)//6 =resultado
console.log(++num)//num - 1+6// operador de incremento

//operador de Decremento

console.log(num--)//num -1 =5// operador de pós-decremento
console.log(num)//4=resultado
console.log(--num)//num - 1-6// operador de decremento

