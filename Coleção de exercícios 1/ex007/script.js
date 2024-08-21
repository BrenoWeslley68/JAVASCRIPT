function Calcular () {
    let nome = document.getElementById('inome').value
    let altura = document.getElementById('ialtura').value
    let peso = document.getElementById('ipeso').value
    
    if (nome === '' || altura == 0 || peso == 0){
        window.alert('Erro, faltando dados')
    } else {
        let quadro = document.getElementById('iquadro')
        let calcular = document.getElementById('cal')
        calcular = peso/(altura**2)
         quadro.innerHTML = `${nome} seu IMC é ${calcular.toFixed(2)} `
         
        document.getElementById('inome').value = ''
        document.getElementById('ialtura').value = ''
        document.getElementById('ipeso').value = ''
        if(calcular < 18.5) {
            quadro.innerHTML += `e você está abaixo do peso`
        } else if (calcular >= 18.5 && calcular <=24.9) {
            quadro.innerHTML += 'e você está no peso ideal'
        } else if (calcular >=25 && calcular <=29.9) {
            quadro.innerHTML += 'e você está com excesso de peso'
        } else if (calcular < 30) {
            quadro.innerHTML += ' e você está obeso'
        } else {
            quadro.innerHTMLitem.text += ' e você está na obesidade extrema'
        }
        

        
    }

}