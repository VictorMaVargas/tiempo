let myKey = "ecb669422ba156a66fd49c7f2ad43aeb"
let cityName = "Madrid"

let temperatura  
let sensTermica
let tempMinima
let tempMaxima

function getWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${myKey}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            console.log(data.main)
            temperatura = data.main.temp
            sensTermica = data.main.feels_like
            tempMinima = data.main.temp_min
            tempMaxima = data.main.temp_max
            graficaTemperaturas()
        })
}

getWeather()

function graficaTemperaturas(){
    const labels = ["Temperatura","Sesación térmica","Temperatura mínima","Temperatura máxima"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Temperaturas',
        data: [temperatura,sensTermica,tempMinima,tempMaxima],
        backgroundColor: [
          'red',
          'blue',
          'green',
          'yellow',
        ],
        borderColor: [
          'black'
        ],
        borderWidth: 1
      }]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
    
     let myChart = new Chart(
        document.getElementById('myChart'),
        config
      );

}
