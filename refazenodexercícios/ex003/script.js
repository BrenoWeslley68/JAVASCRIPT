function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inascimento')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro, dados inválidos')
    } else {

    }
    var sexo = document.getElementsByName('sexo')
    var genero = ''
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
       genero = 'Homem'
       if ( idade >=0 && idade <10){
        //criança
        img.setAttribute('src', 'imagens/crianca-m.jpg')

       } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/jovem-m.jpg')
       } else if ( idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/homem.jpg')
       } else {
        img.setAttribute('src', 'imagens/idoso.jpg')
       }
    } if (sexo[1].checked) {
        genero = 'Mulher'
        if ( idade >=0 && idade <10){
         //criança
         img.setAttribute('src', 'imagens/crianca-f.jpg')
 
        } else if (idade >= 10 && idade < 21) {
         //jovem
         img.setAttribute('src', 'imagens/jovem-f.jpg')
        } else if ( idade < 50){
         //adulto
         img.setAttribute('src', 'imagens/mulher.jpg')
        } else {
         img.setAttribute('src', 'imagens/idosa.jpg')
        }
     }
    res.innerHTML = `Foi encontrado uma pessoa do sexo ${genero} com idade de ${idade} anos <br/> <br/>`
    res.appendChild(img)
}
