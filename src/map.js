// import from 'mapbox-gl';
import Reveal from 'reveal';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGVsZ2VzaWxzZXQiLCJhIjoiY2psbzZ4NTEwMXFyZzN3bzV2Z212eHNmeiJ9.I5Eu88_PdJPXnF0ySxRlcw';

Reveal.addEventListener('slidechanged', event => {
  console.log(event);
});

export function initialize() {
  new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [-4.9, 56.808],
    zoom: 7
  });
}
