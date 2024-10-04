/* FUNÇÕES
Uma função JavaScript é um blocode código projtado para executar uma tarefa específica.

É como uma pequena 'fábrica' onde você da uma entrada e ele da uma saída.

Pode ser encarado como "Mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código

Uma função javaScript é executada quando 'algo' a invoca

*/
function soma(valor1, valor2, valor3, valor4) {
    return valor1 + valor2 + valor3 + valor4;
}
total = soma(12, 15, 54, 78)
alert(total)

function realCotacao(real, cotacao) {
    return real / cotacao;
}

var resultado = realCotacao(40, 5.59)

document.getElementById('texto').innerHTML = resultado.toFixed(2)

var botoes = document.getElementById('buttons')

function alertaHello() {
    alert('Olá, pessoal, isso é um teste')
}

botoes.addEventListener('click', alertaHello)

function paraCelcius(f) {
    return (5 / 9) * (f - 32);

}
var x = paraCelcius(85)
alert(`A temperatura atual é de ${x.toFixed(2)} Celcius`)

function minhaFuncao() {
    var x = 2;
}