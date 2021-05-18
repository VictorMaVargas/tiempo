let myKey = "ecb669422ba156a66fd49c7f2ad43aeb"


let viento
let temperatura
let presion
let humedad


const mapId = 'map';
const initialCoordinates = [40.4169473, -3.7057172];
const map = L.map(mapId).setView(initialCoordinates, 13);

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const ACCESS_TOKEN = 'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';

L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
}).addTo(map);

document.getElementById("boton").addEventListener("click", function(){
    ciudad = document.getElementById("texto").value
    recogerDatos(ciudad)
    
  })
  

function recogerDatos() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&APPID=${myKey}`)
        .then(res => res.json())
        .then(data=>{
            
            viento = data.wind.speed
            temperatura = data.main.temp
            presion = data.main.pressure
            humedad = data.main.humidity
            console.log(data)
            pintarMapa()
        })
}


function pintarMapa() {
    
    L.marker(initialCoordinates).bindPopup(`Velocidad del Viento: ${viento} Km/h \n Temperatura: ${temperatura} ºC \n Presión atmosférica: ${presion} hPa \n Humedad: ${humedad} %`).addTo(map)
}