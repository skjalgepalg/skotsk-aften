import React from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 56.808,
        longitude: -4.9,
        zoom: 6.5
      }
    };
  }

  render() {
    return (
      <ReactMapGL
        ref={this.map}
        mapboxApiAccessToken="pk.eyJ1IjoiaGVsZ2VzaWxzZXQiLCJhIjoiY2psbzZ4NTEwMXFyZzN3bzV2Z212eHNmeiJ9.I5Eu88_PdJPXnF0ySxRlcw"
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}
