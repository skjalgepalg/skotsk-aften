import React from 'react';
import { Slide as SpectacleSlide } from 'spectacle';

export default class Slide extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  render() {
    return <SpectacleSlide {...this.props} />;
  }
}
