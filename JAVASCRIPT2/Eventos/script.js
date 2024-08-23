/* EVENTOS

Eventos são ações disparadas pela interação dos usuários com a página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um clique
ondblclick -> Disparado quando recebe clique duplo
onmouseover -> Disparado quando o mouse está sobre
onmouseout -> Disparado quando o mouse é movido para fora do elemento
onmousemove -> Disparado quando o mouse é movido no elemento
onmousedown -> Disparado quando o clique do botão foi pressionado
onmouseup -> Disparado quando o clique do botão é liberado
onfocus -> Disparado quando o elemento recebe o foco. Válido para input
onchange -> Disparado quando exiiste uma mudança no conteúdo. "Ao mudar"
onblur -> Disparado quando o elemento perde o foco
onkeydown -> disparado quando uma tecla é pressionada 
onkeypress -> disparado quando uma tecla é pressionada e solta
onkeyup -> disparado quando uma tecla é solta sobre o elemento
onload -> disparado quando a página terminou de ser carregada. Body
onresize -> disparado quando há um redimencionamento da janela
*/
function Clique(){
    alert('acionou um evento de clique')
    document.body.style.background = 'lightgreen'
}
function Entrou(){
    let div = document.getElementById('cor')
    div.style.background = 'green'
}
function Saiu(){
    let div = document.getElementById('cor')
    div.style.background = 'yellow'
}
function Clicou(){
    let div = document.getElementById('cor')
    div.style.background = 'red'
}
function Moveu(){
    let div = document.getElementById('cor')
    div.style.background = 'purple'
}
function Limpar(){
    let div = document.getElementById('inome').value = ''
    
}
function Mudanca(){
    let div = document.getElementById('inome')
    console.log('Mudou algo')
    
}
function Desfocou(){
    alert('desfocou')
}
function Pressionou(){
    document.body.style.background = 'lightblue'
}
function Carregou(){
    alert('A página carregou')
}

