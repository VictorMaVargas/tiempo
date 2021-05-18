let myKey= "44d669927c5aec81e1ab2f7589d5d55d"
let cityName = "Madrid"
let windSpeed 
function getWindSpeed() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${myKey}`)
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
            windSpeed=data.wind.speed
            console.log(data.wind.speed )
            paintWindSpeed()
})
    
}
getWindSpeed()


function paintWindSpeed() {
    const labels =["velocidad de viento"]
    const data = {
  labels: labels,
  datasets: [
    {
      label: 'velucida viento',
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
  new Chart(
      document.getElementById("myChart"),
      config
  )
    
}