function contar() {
    // Captura os elementos HTML pelos seus IDs e armazena nas variáveis
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')

    // Verifica se algum dos campos está vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Se algum campo estiver vazio, exibe uma mensagem de erro
        window.alert('Erro, insira um valor')
        return;
    } else {
        // Converte os valores de entrada para números
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        // Inicializa o campo de resultado com a mensagem "Contando"
        res.innerHTML = `Contando: `

        // Cria um laço de repetição para contar de 'i' até 'f', incrementando por 'p'
        for (var c = i; c <= f; c += p) {
            // Adiciona cada número ao resultado com um espaço entre eles
            res.innerHTML += `${c} `
        }
    }
}

