/*
MANIPULAR DATAS EM JAVASCRIPT


*/
//COMANDO BASE PARA PEGAR A DATA ATUAL
//let data = new Date()
//PEGA O ANO ATUAL COM 4 DIGITOS
//let ano = data.getFullYear()
//PEGA O MES ATUAL
//let mes = data.getMonth()
alert(mes)

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let mess = meses[data.getMonth()] // mostra o mês por escrito
alert(mess)
//PEGA O DIA DO MES
//let dia = data.getDate()
//PEGA O DIA DA SEMANA
let diaSemana = data.getDay()
alert(diaSemana)
const semana = ['domingo','segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
const sem = semana[data.getDay()]
alert(sem)


let dinheiro = 200
let reais = dinheiro.toLocaleString('pt-BR', {style: 'currency', currency : 'USD'})
alert(reais)
let d = new Date()
let dia = d.getDate()
let mes = d.getMonth()
let ano = d.getFullYear()
let informacoes = document.getElementById('data').innerHTML = `${dia}/${mes}/${ano}`


let hoje = new Date()
let vencimento = new Date(2024,5,20)
let diasVencidos = hoje.getTime()- vencimento.getTime()
let dias = Math.ceil(diasVencidos / (24*60*60*1000)) //transforma os milissegundos em dias
alert(`${dias} dias vencidos`)