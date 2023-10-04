let latitude = 22.7868542;
let longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiY2xlb3BhdHJhMSIsImEiOiJjbG5idDlzM2swM3pnMmp1Zmx2eWljbDFyIn0.8jmp8LtiLdi6ekn-7sqBKw';

var map= new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
})


map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccruracy: false,
            timeout: 6000,               
        },
        trackUserLocation: true

    })

)