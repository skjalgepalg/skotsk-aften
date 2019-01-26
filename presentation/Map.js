import React from 'react';

import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export const defaultCenter = { longitude: -4.9, latitude: 56.808 };
export const defaultZoom = 10;

import distilleries from '../assets/distilleries.json';

export default class Map extends React.Component {
  markers = [];

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.panTo = this.panTo.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGVsZ2VzaWxzZXQiLCJhIjoiY2psbzZ4NTEwMXFyZzN3bzV2Z212eHNmeiJ9.I5Eu88_PdJPXnF0ySxRlcw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
      center: [defaultCenter.longitude, defaultCenter.latitude],
      zoom: defaultZoom
    });
  }

  panTo({ latitude, longitude, zoom }) {
    this.map.flyTo({
      center: [longitude, latitude],
      zoom: zoom || 6.5,
      // speed: 0.03,
      // curve: 0.1,
      maxDuration: 2500
    });
  }

  clearMarkers = () => {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  };

  addMarkers = (filterFn = () => true, highlight = () => false) => {
    distilleries.features.filter(filterFn).forEach(marker => {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.classList.add('marker');
      if (highlight(marker)) {
        el.classList.add('highlight');
      }

      // make a marker for each feature and add to the map
      this.markers.push(
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(this.map)
      );
    });
  };

  render() {
    return (
      <div
        ref={this.container}
        id="map"
        style={{ width: '100vw', height: '100vh' }}
      />
    );
  }
}
