//Create map
const map = L.map('mapid').setView([-27.1985044,-49.6284384], 15);

//Create and add TitleLayerS

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

//create icon

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,58]

})

