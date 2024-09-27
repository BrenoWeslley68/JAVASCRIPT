function Gerar () {
    var num = document.getElementById('inumero')
    var tab = document.getElementById('itabuada')
    if( num.value.length == 0){
        window.alert ('erro, digite um número')
    } else{
        var n = Number(num.value)
        var c = 1
        while (c<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++

        }
    }
}