function contar() {
    //Linhas 2-5: Obtêm os valores dos campos de entrada de início, fim, passo, e o elemento para exibir o resultado.
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')

    if( inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0) {
        window.alert('Erro, falta dados') //Linha 7: Verifica se algum dos campos está vazio. Se sim, exibe uma mensagem de erro.
    } else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value) //Linhas 10-12: Converte os valores de início, fim e passo para números e prepara a exibição do resultado.
        res.innerHTML = `Contando: ` //Linha 13: Inicia a exibição com "Contando: ".
        if ( i < f){
            for(var c = i; c<= f; c += p){
                res.innerHTML += `${c} ` //Linhas 14-18: Se o início for menor que o fim, executa uma contagem crescente e exibe os números.
            } 
                
        } else {
            for ( var c = i; c >= f; c -=p) {
                res.innerHTML += `${c} ` //Linhas 19-22: Caso contrário, realiza uma contagem decrescente e exibe os números.
            }
        }

        
        }
    }

