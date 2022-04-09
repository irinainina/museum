
mapboxgl.accessToken = 'pk.eyJ1IjoiaXJpbmEyMjIiLCJhIjoiY2syOWljZjk0MDkzeTNvbWp3NnhlZm9ubCJ9.u-TAYkBs4q_st7exHmlCNg';
  var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v10',
      center: [2.3363, 48.86094], // starting position
      zoom: 16, // starting zoom
      attributionControl: false
  });
var marker = new mapboxgl.Marker({ color: '#606060' })
.setLngLat([2.3364, 48.86091])
.addTo(map);
var marker2 = new mapboxgl.Marker({ color: '#c0c0c0' })
.setLngLat([2.3333, 48.8602])
.addTo(map);
var marker2 = new mapboxgl.Marker({ color: '#c0c0c0' })
.setLngLat([2.3397, 48.8607])
.addTo(map);
var marker2 = new mapboxgl.Marker({ color: '#c0c0c0' })
.setLngLat([2.3330, 48.8619])
.addTo(map);
var marker2 = new mapboxgl.Marker({ color: '#c0c0c0' })
.setLngLat([2.3365, 48.8625])
.addTo(map);

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

// https://docs.mapbox.com/api/maps/styles/



