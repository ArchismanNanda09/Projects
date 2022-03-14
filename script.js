mapboxgl.accessToken = 'pk.eyJ1IjoiYXJjaGVlemUiLCJhIjoiY2wwa3dpZ3JtMHFkbjNjc2Q4NjhvenhreiJ9.0Y5ParSkqsaOVmEULnrRew';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})
var map = new mapboxgl.Map({
container: "map",
style: 'mapbox://styles/mapbox/streets-v11'
});

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  
  function errorLocation() {
    setupMap([-2.24, 53.48])
  }
  
  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15
    })
  
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })
  
    map.addControl(directions, "top-left")
  }