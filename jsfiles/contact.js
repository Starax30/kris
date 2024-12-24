const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


let kaart = L.map('kaart').setView([51.1666, 4.4515], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(kaart);

L.marker([51.1666, 4.4515]).addTo(kaart)
    .bindPopup('Mortsel')
    .openPopup();
