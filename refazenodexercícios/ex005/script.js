function testar () {
    let num = document.getElementById ('inumero')
    let tab = document.getElementById('itabuada')
    if (num.value.length == 0) {
        window.alert('Erro, digite um número')
    } else{
        var n = Number(num.value)
        var c = 1

        while (c<=10) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}