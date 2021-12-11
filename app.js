// hugo coleau 
// renvoie le premier élément qui correspond à un ou plusieurs sélecteurs CSS spécifiés dans le document
// Obtenir les éléments du document
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temperature = document.querySelector('.temp');
var temp_min = document.querySelector('.temp_min');
var humidity = document.querySelector('.humidity');
var feel = document.querySelector('.feel');
var lon = document.querySelector('.lon');
var lat = document.querySelector('.lat');
var dt = document.querySelector('.dt');
var pressure = document.querySelector('.pressure');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var wind = document.querySelector('.wind');
var sysCountry = document.querySelector('.syscountry');
var button = document.querySelector('.submit');
var cle_api = "86165458d789e9618eaf25ed195a4349"
    // attacher un gestionnaire d'événement à un élément spécifié
button.addEventListener('click', function(name) {
    // concatenation avec l'appel de la variable cle_api pour reduire la taille du code

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + cle_api)
        // ci dessous l'url api 5 day weather forecast que je dois normalement utiliser 
        //  https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=86165458d789e9618eaf25ed195a4349'
        .then(response => response.json())
        .then(data => {
            // code ci dessous pour recuperer les infos contenu dans le json afin d'afficher dans la page html 

            // recup temperature en degres  pour convertir en celsius > (-273.15)
            var tempValue = data['main']['temp'] - 273.15;

            // je recupere ci dessous la temperature avec api( 5 day weather forecast) 
            // var tempValue = data['list'][0]['main']['temp'];


            // recup temperature min en degres 
            var temp_minValue = data['main']['temp_min'] - 273.15;
            //recup pressionn en hPa
            var pressValue = data['main']['pressure'];
            //recup humidite en %
            var humidValue = data['main']['humidity'];
            //  le ressenti de temperature conversion en degres avec -273.15
            var feelValue = data['main']['feels_like'] - 273.15;
            // longitude 
            var lonValue = data['coord']['lon'];
            //latitude
            var latValue = data['coord']['lat'];
            // nom de la ville
            var nameValue = data['name'];
            //recup la description
            var descValue = data['weather'][0]['description'];

            // je recupere le timestamp 
            var dtValue = data['dt'];
            // Vitesse du vent
            var windValue = data['wind']['speed'];
            //sys.country Code pays (GB, JP, etc.)
            var syscountryValue = data['sys']['country'];

            //  sys.sunrise Heure du lever du soleil, unix, UTC
            //  sys.sunset Heure du coucher du soleil, unix, UTC


            main.innerHTML = nameValue;
            // affichage sur la page html avec concatenation de chaque valeur 
            // innerHTML permet de  lire pour insérer dynamiquement le contenu dans ma page
            feel.innerHTML = "Temperature ressentie en °C : " + feelValue
            desc.innerHTML = "Description du ciel : " + descValue;
            temperature.innerHTML = "Temperature en °C  : " + tempValue;
            humidity.innerHTML = "Humidité en %: " + humidValue + "%";
            pressure.innerHTML = "Pression en hPa : " + pressValue
            temp_min.innerHTML = "Temperature minimum en degre celsius : " + temp_minValue
            lon.innerHTML = "Longitude : " + lonValue
            lat.innerHTML = "Latitude : " + latValue
            dt.innerHTML = "Date en unix, UTC: " + dtValue
            wind.innerHTML = "Vitesse du vent Unité par défaut: m/s :" + windValue
            sysCountry.innerHTML = "Code pays (GB, JP, etc.) : " + syscountryValue
            input.value = "";

        })


})