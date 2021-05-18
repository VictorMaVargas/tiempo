let myKey = "ecb669422ba156a66fd49c7f2ad43aeb"

let temperatura  
let sensTermica
let tempMinima
let tempMaxima
let seaLevel
let groundLevel

document.getElementById("boton").addEventListener("click", function(){

  let text = document.getElementById("texto").value
  getWeather(text)
  getWindSpeed(text)
  getPressure(text)
  console.log(text);
})


/* removeData()
  addData()

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
} */


function getWeather(cityName) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${myKey}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            console.log(data.main)
            console.log(data.main.temp);
            temperatura = data.main.temp
            sensTermica = data.main.feels_like
            tempMinima = data.main.temp_min
            tempMaxima = data.main.temp_max
            graficaTemperaturas()
        })
}



function graficaTemperaturas(){
    const labels = ["Temperatura","Sensación térmica","Temperatura mínima","Temperatura máxima"];
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
        borderWidth: 4
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

/////Velocidad del viento

let windSpeed 
function getWindSpeed(cityName) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${myKey}`)
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
            windSpeed=data.wind.speed
            console.log(data.wind.speed )
            paintWindSpeed()
})
    
}



function paintWindSpeed() {
    const labels =["Velocidad del viento"]
    const data = {
  labels: labels,
  datasets: [
    {
      label: 'Velocidad del viento',
      data:[windSpeed],
      borderColor:"black",
      backgroundColor:"blue",
      borderWith:4,
    
    },
   
  ]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y:{
                beginAtZero:true
                }
             }
     
     },
  };
  let myChart = new Chart(
      document.getElementById("myChart2"),
      config
  )
    
}





//Barras de presion

function getPressure(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${myKey}`)
      .then(res => res.json())
      .then(data=>{
          console.log()
          seaLevel = data.list[0].main.sea_level
          groundLevel = data.list[0].main.grnd_level
          graficaPresion()
      })
}


function graficaPresion(){
  const labels = ["Presion nivel del mar","Presion nivel del suelo"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Presiones atmosféricas',
      data: [seaLevel,groundLevel],
      backgroundColor: [
        'red',
        'blue'
      ],
      borderColor: [
        'black'
      ],
      borderWidth: 4
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
      document.getElementById('myChart3'),
      config
    );
}