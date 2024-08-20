function Contar () {
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro, faltando dados')
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = `Contando:`
        for (var c = i; c<=f; c+=p) {
            res.innerHTML += `${c} `
        }

    }
}