/* 
ARRAYS

Os arrays JavaScriot são usados para armazenar varios valores em uma unica variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você da para itens dentro dele, os arrays não prossuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ondem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"]

A lista[0] (lista posição 0) vai conter o valor "arroz"
A lista[1] (lista posição 1) vai conter o valor "feijão"

E assim por diante.
*/
const lista = ["arroz", "feijão", "macarrão", "leite"]; // array literal
alert(lista[0] +' '+ lista[1]);
let x = lista[3]
alert(x)

const pessoa = ["Breno", "Weslley", 30, 'mattos'] //array podem ser utilizados quando precisa de muitos dados específicos
pessoa.push('Santana')
alert(pessoa.length -1) // mosta o número de variáveis dentro do array
alert(pessoa[pessoa.length -1]) // com essa fórmula, sempre aparecerá o ultimo item do array de forma especifica, nesse nosso caso, 'Santana'
const PESSOA = { nome:"Breno",sobrenome:"Weslley", idade:30, } //objeto são utilizados para dados mais genéricos e simples

alert(Array.isArray(pessoa)) // me mostra se a matriz que estou trabalhando realmente é um array
//pessoa[0], // array nome
//PESSOA.nome, // objeto nome 
