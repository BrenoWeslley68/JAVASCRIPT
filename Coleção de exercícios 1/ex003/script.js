function verificar() //Esta é a função que é executada quando o botão "Verificar" é clicado.
{
    var data = new Date() //Aqui, pegamos a data atual, como o ano de hoje.
    var ano = data.getFullYear() //Isso pega o ano atual, por exemplo, 2024.
    var fano = window.document.getElementById('iano') //Pegamos o valor que o usuário digitou no campo de ano de nascimento.
    var res = document.getElementById('res') //Apontamos para a área onde o resultado será exibido.
    if ( fano.value.length == 0 || fano.value > ano){ //Verificamos se o campo de ano de nascimento está vazio ou se o ano é maior que o atual (o que seria impossível).
        window.alert('[ERRO!] Verifique os dados e tente novamente!')//Se o valor estiver incorreto, mostramos um alerta de erro.
    } else{
} var sexo = window.document.getElementsByName('sexo') //Pegamos as opções de sexo (Masculino ou Feminino).
  var idade = ano - fano.value //Calculamos a idade do usuário subtraindo o ano de nascimento do ano atual.
  var gênero = '' //Criamos uma variável para armazenar se é "Homem" ou "Mulher".
  var img = document.createElement('img') //Criamos uma imagem para mostrar a foto correspondente.
  img.setAttribute('id', 'foto') //Damos um ID para essa imagem.
  if(fsexo[0].checked) { //Verificamos se a opção "Masculino" foi selecionada.
    gênero ='Homem' //Se sim, definimos o gênero como "Homem".
    if (idade >= 0 && idade <10){ //Aqui começamos a checar a idade. Se for entre 0 e 10 anos, é uma criança.
        //criança
        img.setAttribute('src', 'imagens/crianca-m.jpg') //Mostramos a imagem de uma criança do sexo masculino.

        
    }else if (idade >= 10 && idade < 21){ //Se a idade for entre 10 e 21, é um jovem.
        //jovem
        img.setAttribute('src', 'imagens/jovem-m.jpg') //Mostramos a imagem de um jovem masculino.
    } else if (idade < 50) { //Se a idade for menor que 50, é um adulto.
        //adulto
        img.setAttribute('src', 'imagens/homem.jpg') //Mostramos a imagem de um homem adulto.
    } else { //Caso contrário, é um idoso.
        //idoso
        img.setAttribute('src', 'imagens/idoso.jpg') //Mostramos a imagem de um idoso.

    }
  } 
  else if (fsexo[1].checked){ //Agora verificamos se a opção "Feminino" foi selecionada.
    gênero = 'Mulher' //Se sim, definimos o gênero como "Mulher".
    if (idade >= 0 && idade <10){ //Checamos a idade, e se for entre 0 e 10 anos, é uma criança.
        //criança
        img.setAttribute('src', 'imagens/crianca-f.jpg') //Mostramos a imagem de uma criança do sexo feminino.
    }else if (idade >= 10 && idade < 21){ //Se a idade for entre 10 e 21, é uma jovem.
        //jovem
        img.setAttribute('src', 'imagens/jovem-f.jpg') //Mostramos a imagem de uma jovem feminina.
    } else if (idade < 50) { //Se a idade for menor que 50, é uma adulta.
        //adulto
        img.setAttribute('src', 'imagens/mulher.jpg') //Mostramos a imagem de uma mulher adulta.
    } else { //Caso contrário, é uma idosa.
        //idoso
        img.setAttribute('src', 'imagens/idosa.jpg') //Mostramos a imagem de uma idosa.
    }
  }
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos <br/> <br/>` //Aqui mostramos o texto com o gênero e a idade do usuário.
  res.appendChild(img) //Finalmente, adicionamos a imagem ao resultado.
  

}
