import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import React from 'react';
import distilleries from '../assets/distilleries.json';

export const defaultCenter = { latitude: 34.27357961572655, longitude: 24.76671443619682 };
export const defaultZoom = 1.6285391864706138;

export default class Map extends React.Component {
  markers = [];

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.panTo = this.panTo.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGVsZ2VzaWxzZXQiLCJhIjoiY2pyZzUxMHkxMTFzajQ1cmt1Z3IxYTNzbyJ9.JU4ovmAzzWtp54XVigKehg';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v9', // hosted style id
      center: [defaultCenter.longitude, defaultCenter.latitude],
      zoom: defaultZoom
    });
    window.map = this.map;
  }

  panTo({ latitude, longitude, zoom }) {
    this.map.flyTo({
      center: [longitude, latitude],
      zoom: zoom || defaultZoom,
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
        id='map'
        style={{ width: '100vw', height: '100vh' }}
      />
    );
  }
}
