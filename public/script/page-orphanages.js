//Create map
const map = L.map('mapid').setView([-27.1985044,-49.6284384], 15);

//Create and add TitleLayerS

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

//create icon

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,58],
    popupAnchor: [170,2]

})

//creat popup

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chosse-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//Creat and add Maker

L.marker([-27.1985044,-49.6284384], { icon: icon}).addTo(map)
    .bindPopup(popup)

