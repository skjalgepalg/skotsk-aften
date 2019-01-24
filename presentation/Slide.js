import React from 'react';
import { Slide as SpectacleSlide } from 'spectacle';

export default class Slide extends React.Component {
  componentDidMount() {
    this.props.onEnter && this.props.onEnter();
  }
  render() {
    return <SpectacleSlide {...this.props} />;
  }
}
