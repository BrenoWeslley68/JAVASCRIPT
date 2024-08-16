
function tabuada() {
    // Captura o elemento HTML onde o usuário insere o número
    var num = document.getElementById('inumero')
    
    // Captura o elemento HTML onde a tabuada será exibida (provavelmente um select)
    var tab = document.getElementById('itabuada')

    // Verifica se o campo de número está vazio
    if (num.value.length == 0) {
        // Se estiver vazio, exibe uma mensagem de alerta solicitando um número
        window.alert('Digite um número')
    } else {
        // Converte o valor inserido para número
        var n = Number(num.value)
        var c = 1 // Inicia o contador para o loop de 1 até 10

        // Limpa o conteúdo anterior da tabuada (se houver)
        tab.innerHTML = ''

        // Cria um laço para gerar a tabuada do número inserido, multiplicando de 1 até 10
        while (c <= 10) {
            // Cria um novo elemento <option> para cada linha da tabuada
            let item = document.createElement('option')

            // Define o texto do item no formato "n x c = resultado"
            item.text = `${n} x ${c} = ${n * c}`

            // Adiciona o item criado ao elemento select (tabuada)
            tab.appendChild(item)

            // Incrementa o contador para a próxima iteração
            c++
        }
    }
}