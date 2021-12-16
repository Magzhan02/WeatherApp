function api(city) {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=58ea4c621051572b942c8d87d917ba51`)
      .then((res) => res.json())
      .then((data) =>
         displayWeather(data)
      );
}

function displayWeather(data) {
   const {name} = data;
   const {description,icon} = data.weather[0];
   const {temp,humidity} = data.main;
   const {speed} = data.wind;
   const {country} = data.sys;
   document.querySelector('.city').innerText = `Weather in ${name}, ${country}`;
   document.querySelector('.temp').innerText = `${Math.floor(temp)}°C`;
   document.querySelector('.icon').src ="http://openweathermap.org/img/w/" + icon + ".png";
   document.querySelector('.descr').innerText = `${description}`;
   document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
   document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`;
   document.querySelector('.info__block').classList.remove('loading');
   document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?winter,"+ name +"')";
};

function Setsearch(){
   api(document.querySelector('.search').value)
}
document.querySelector('.search__block button').addEventListener('click',function(){
   Setsearch()
})
document.querySelector('.search__block input').addEventListener('keyup',function(e){
   if(e.keyCode === 13 && e.key === 'Enter')
      Setsearch()
});

api('Almaty')

