let num = document.getElementById('inumero')
let lista = document.getElementById('ilista')
let res = document.getElementById('res')
let valores = []
function Numero (n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else{
       return false
    }
}

function Ilista (n,l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar () {
    if(Numero(num.value) && !Ilista(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('erro')
    }
    num.value =''
    num.focus()
}
function Finalizar () {
if (valores.length == 0) {
    window.alert('Erro, digite um valor na lista')
} else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
            maior = valores[pos]
        } else if (valores[pos]< menor) {
            menor = valores[pos]
        }
         
    }
    media = soma/tot
    res.innerHTML = `<p>O maior valor entre os números acima ée ${maior}</p>`
    res.innerHTML = `<p>O menor valor entre os números acima é ${menor}</p>`
    res.innerHTML = `<p>A soma entre os valores acima é ${soma}</p>`
    res.innerHTML = `<p>A media entre os valores acima é ${media}</p>`
    res.innerHTML = `<p>O valor total entre os números acima é ${tot}</p>`


}
}