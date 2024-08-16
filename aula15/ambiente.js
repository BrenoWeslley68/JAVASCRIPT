// Define um array chamado 'num' com os valores 5, 8, 2, 9 e 3
let num = [5,8,2,9,3]

// Obtém o tamanho atual do array 'num' (quantidade de elementos)
// Esta linha não faz nada além de retornar o tamanho do array,
// mas o valor não é armazenado em nenhuma variável ou exibido.
num.length

// Adiciona o valor 7 ao final do array 'num'
num.push(7)

// Exibe o conteúdo atual do array 'num'
console.log(`A sequência dos vetores é ${num}`)

// Exibe o número de elementos no array 'num'
console.log(`Nosso vetor tem ${num.length} posições`)

// Exibe o primeiro valor do array 'num', que é o valor no índice 0
console.log(`O primeiro valor do vetor é ${num[0]}`)

// Procura o valor 9 no array 'num' e armazena o índice na variável 'pos'
let pos = num.indexOf(9)

// Verifica se o valor 9 foi encontrado no array
// Se não for encontrado, 'indexOf' retorna -1
if(pos == -1){
    console.log('Valor não foi encontrado')  // Exibe uma mensagem se o valor não for encontrado
} else{
    // Exibe o índice onde o valor 9 foi encontrado
    // Nota: o console.log menciona 'o valor 2', mas deveria ser 'o valor 9'
    console.log(`O valor 9 está localizado no elemento ${pos}`)
}