// import from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGVsZ2VzaWxzZXQiLCJhIjoiY2psbzZ4NTEwMXFyZzN3bzV2Z212eHNmeiJ9.I5Eu88_PdJPXnF0ySxRlcw';

let map;

const slides = [
  [
    {
      onEnter() {
        console.log(map);
      }
    }
  ],
  [
    {
      onEnter() {
        console.log(map);
      }
    }
  ]
];

export function initialize(Reveal) {
  map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [-4.9, 56.808],
    zoom: 7
  });

  Reveal.addEventListener('slidechanged', event => {
    slide = slides[event.indexh][event.indexv];
    slide.onEnter && slide.onEnter();
  });
}
