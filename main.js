let latitude, longitude,destination;

$(document).ready(function () {
  initGeolocation();
});

$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    alert("Sorry! Browser does not support geolocation services!");
  }
}

function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2xlb3BhdHJhMSIsImEiOiJjbG5idDlzM2swM3pnMmp1Zmx2eWljbDFyIn0.8jmp8LtiLdi6ekn-7sqBKw";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 16,
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccruracy: false,
        timeout: 6000,
      },
      trackUserLocation: true,
    })
  );

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );

  map.on('click', function(e){
    destination = e.lngLat;
  })
}

//www.example.com/index?arg1=6r368983ry&arg2=jfnewjlfjwfj&arg3='jfbejeb'
