let weather = {
    apikey : "22f01a3e5401babbab130360eb186b6a",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
              + city
              + "&units=metric&appid=" 
              + this.apikey 
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".icon").src = "https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?" + icon + "size=64px&ext=jpg";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed:" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");

        document.body.style.backgroundImage = "url('https://source.unsplash.com/random?blue sky" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}; 

document.querySelector(".search button").addEventListener("click",function(){
 weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("Delhi")