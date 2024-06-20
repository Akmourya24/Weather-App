const searchBox=document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weatherimage= document.querySelector(".weather img");

async function cheackWeather(city){
    const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37761dc05dea2a5d3fdc13de3fdeba4a&units=metric`);
    
if (Response.status==404){
    document.querySelector(".error").style.display='block';
}

    var data= await Response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;              
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".speed").innerHTML=data.wind.speed + "km/h";

    if (data.weather[0].main=="Clouds"){
        weatherimage.src="image/clouds.png";
         
    }
    else if( data.weather[0].main=="Clear"){
        weatherimage.src="image/clear.png";
    }
    else if( data.weather[0].main=="Rain"){
        weatherimage.src="image/rain.png";

    }
    else if (data.weather[0].main=="Snow"){
        weatherimage.src="image/snow.png";
    }
    
    else if (data.weather[0].main=="Drizzle"){
        weatherimage.src="image/drizzle.png";
    }
    
    else if (data.weather[0].main=="Mist"){
        weatherimage.src="image/mist.png";
    }
    
    
}
searchbtn.addEventListener("click", () => {
    cheackWeather(searchBox.value)

});

cheackWeather()


   
    
