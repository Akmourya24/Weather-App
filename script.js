const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherimage = document.querySelector(".weather img");

document.getElementById("card").style.display = "none";
setInterval(() => {
    const date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    document.getElementById('timer').innerHTML = h + ':' + m + ':' + s;


}, 1000)

const date = new Date();
d = date.getDate();
month = date.getMonth();
year = date.getFullYear();
day = date.getDay();

document.getElementById('fulldate').innerHTML = d + ':' + month + ':' + year;



async function cheackWeather(city) {
    const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37761dc05dea2a5d3fdc13de3fdeba4a&units=metric`);


    if (Response.status == 404) {
        document.querySelector(".error").style.display = 'block';
    }
    else {
        document.querySelector(".error").style.display = 'none';
    }

   
    document.getElementById("btn").addEventListener("click", () => {
        if (Response.status === 404) {
            
            document.getElementById("card").style.display = "none";
        }
        else{
            document.getElementById("card").style.display = "block";
        }
        
    })
    


    var data = await Response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".min_temp").innerHTML = Math.round(data.main.temp_min) + "°C"
    document.querySelector(".max_temp").innerHTML = Math.round(data.main.temp_max) + "°C"
    document.querySelector(".typeofweather").innerHTML = (data.weather[0].main);
    document.querySelector(".feellike span").innerHTML = Math.round(data.main.feels_like) + "°C"

    if (data.weather[0].main == "Clouds") {
        weatherimage.src = "image/clouds.png";

    }
    else if (data.weather[0].main == "Clear") {
        weatherimage.src = "image/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherimage.src = "image/rain.png";

    }
    else if (data.weather[0].main == "Snow") {
        weatherimage.src = "image/snow.png";
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherimage.src = "image/drizzle.png";
    }

    else if (data.weather[0].main == "Mist") {
        weatherimage.src = "image/mist.png";
    }



}
searchbtn.addEventListener("click", () => {
    cheackWeather(searchBox.value)

});

cheackWeather()




