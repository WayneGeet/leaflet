var map = L.map('map').setView([34.0697,-118.4432], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([ -0.3953, 36.9624]).addTo(map)
		.bindPopup('This is where Wynne studies at and knew how to create maps')
		.openPopup();	