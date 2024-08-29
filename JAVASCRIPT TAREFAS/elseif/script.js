const clima = document.getElementById('weather')
const texto = document.getElementById('texto')
const temperatura = 90
function setWeather(){
    const choice = clima.value
    if ( choice === 'sunny' && temperatura < 90){
        texto.innerHTML = `It is ${temperatura},  degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`
       
    } else if(choice === 'sunny' && temperatura >= 90){
        texto.innerHTML = `It is ${temperatura}, degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on`
    } else if ( choice === 'rainy'){
        texto.innerHTML = `Rain is falling outside, take a rain coat and a brolly, and don't stay out for too long.`
    } else if ( choice === 'snowing'){
        texto.innerHTML = `the snow is coming down - is is freezing! Best to stay with a cup of hot chocolate, go build a snowman`
    } else if ( choice === 'overcast'){
        texto.innerHTML = `It isn't raining, but the sky is grey and gloomy, it could turn any minute, so take a rain coat just in case`
    } else{
        texto.innerHTML = ''
    }
}
Feliz = 'Feliz aniversário'
var greatDay = Feliz ? 'Feliz aniversário': 'não é seu aniversário'
alert(greatDay)