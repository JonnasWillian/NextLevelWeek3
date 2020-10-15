const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZomm: false,
    scrollWheelZoom: false,
    ZoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-27.1985044,-49.6284384], 15);

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

//Creat and add Maker

L.marker([-27.1985044,-49.6284384], { icon: icon}).addTo(map)
    .bindPopup(popup)

/* Image Galery */

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    /* Remover todas as classes .actives*/
    const button = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    /* Selecionar imagem clicada*/
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-detalis > img")

    /* Atualizar container de imagem*/
    imageContainer.src = image.src

    /* adicionar a classe active */

    button.classList.add("active")
}