import React from 'react';

import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export const defaultCenter = { longitude: -4.9, latitude: 56.808 };
export const defaultZoom = 6.5;

export default class Map extends React.Component {
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

    console.log(this.map);
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
