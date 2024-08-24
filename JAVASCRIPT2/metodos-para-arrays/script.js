//const pessoa = ['Breno', 'Weslley', 21, 'Masculino']
//pessoa.pop();// retira o ultimo valor da minha arrays
//pessoa.push('Qualquer coisa')// adiciona um novo valor na ultima casa do array
//pessoa.shift(); // retira o primeiro valor da minha array, deve se considerar que sempre que utilizarmos o shift, o valor de todos os elementos serão alterados, o [1] passará a ser [0]
//pessoa.unshift('Bonito') // adiciona um valor ao primeiro elemento de minha array
//pessoa.splice(1,0,'item adicionado1', 'item adicionado2')// adiciona itens a minha matriz removendo ou não valores anteriores
const lista1 = ['Arroz','Feijão','Macarrão','Leite']
const lista2 = ['Suco','Refrigerante','Carne']
const lista3 = ['salgadinho']
const superLista = lista1.concat(lista2, lista3) // Isso junta as duas matrizes anteriores
alert(superLista)

const jogadores = ['Biro Biro', 'Ribamar', 'Pelé', 'Maradona','Neymar', 'Messi', 'CR7', 'Vampeta', 'Dimitri'];
const craques = jogadores.slice(2,7); //isso reparte a matriz do ponto definido, no nosso caso a partir de pelé[2] e finaliza no ponto definido também, CR7[7]
jogadores.sort()// o sort() deixa os itens do menor para o maior ou se for string de A-Z
jogadores.reverse() // reverte  ordem alfabética Z-A
alert(craques)
document.getElementById('texto').innerHTML = jogadores;
const numeros = [1,10,25,40,100,27,80]
numeros.sort(function(a,b){return a-b}) // Deixa em ordem de numeração menor para o maior
alert(numeros)
document.getElementById('texto').innerHTML = menorNumero(numeros)
function maiorNumero (array){
    return Math.max.apply(null,array) //função para pegar o maior número de um array
}
function menorNumero (array){
    return Math.min.apply(null,array) //função para pegar o menor número de um array
}

const maior20 = numeros.filter(filtragem); //numeros maiores que 20
function filtragem(value, index, array){
    return value > 20;

}
document.getElementById('texto').innerHTML = maior20



