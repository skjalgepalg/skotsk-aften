// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Text,
  Appear
} from 'spectacle';

import Slide from './Slide';
import Map, { defaultCenter } from './Map';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'transparent',
    secondary: '#a1cdff',
    tertiary: '#ca317d',
    quaternary: '#fff'
  },
  {
    primary: 'Montserrat',
    // secondary: 'Helvetica'
    secondary: 'Work Sans'
  }
);

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.map = React.createRef();
    this.panToDefault = this.panToDefault.bind(this);
  }

  panToDefault() {
    this.map.current.panTo({ ...defaultCenter });
  }

  render() {
    return (
      <>
        <Map ref={this.map} />
        <Deck transition={['fade']} transitionDuration={500} theme={theme}>
          <Slide
            transition={['fade']}
            bgColor="primary"
            onEnter={this.panToDefault}
          >
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Whisky
            </Heading>
            <Appear>
              <Text fit caps textColor="tertiary" textFont="secondary">
                (fra Skotland)
              </Text>
            </Appear>
          </Slide>
          <Slide onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Etymologi
            </Heading>
            <Text textColor="tertiary">
              Av gaelisk "Uisge beatha" (<code>usquebaugh</code>)
            </Text>
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Kategorier
            </Heading>
            <Appear>
              <Text textColor="tertiary" textFont="secondary">
                Single Malt Scotch Whisky
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textFont="secondary">
                Single Grain Scotch Whisky
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textFont="secondary">
                Blended Scotch Whisky
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textFont="secondary">
                Blended Malt Scotch Whisky
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textFont="secondary">
                Blended Grain Scotch Whisky
              </Text>
            </Appear>
          </Slide>

          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary" textFont="secondary">
              Malting
            </Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary" textFont="secondary">
              Mesking
            </Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary" textFont="secondary">
              Fermentering
            </Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary" textFont="secondary">
              Destillering
            </Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary" textFont="secondary">
              Lagring
            </Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
          </Slide>
          <Slide
            align="flex-start"
            onEnter={() =>
              this.map.current.panTo({
                latitude: 55.42,
                longitude: -3.48
              })
            }
          >
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
            <Heading caps>Lowland</Heading>
          </Slide>
          <Slide align="flex-start" onEnter={this.panToDefault}>
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
            <Heading caps>Highland</Heading>
          </Slide>
          <Slide
            align="flex-start"
            onEnter={() =>
              this.map.current.panTo({
                latitude: 57.54,
                longitude: -3.26
              })
            }
          >
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
            <Heading caps>Speyside</Heading>
          </Slide>
          <Slide
            align="flex-start"
            onEnter={() => {
              this.map.current.panTo({
                latitude: defaultCenter.latitude + 0.5,
                longitude: defaultCenter.longitude,
                zoom: 6
              });
            }}
          >
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
            <Heading caps>Island</Heading>
          </Slide>
          <Slide
            align="flex-start"
            onEnter={() => {
              this.map.current.panTo({
                latitude: 55.57,
                longitude: -5.56,
                zoom: 8
              });
            }}
          >
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
            <Heading caps>Campbeltown</Heading>
          </Slide>
          <Slide
            align="flex-start"
            onEnter={() => {
              this.map.current.panTo({
                latitude: 55.76,
                longitude: -6.2,
                zoom: 9
              });
            }}
          >
            <Heading caps textColor="secondary">
              Regioner
            </Heading>
            <Heading caps>Islay</Heading>
          </Slide>
        </Deck>
      </>
    );
  }
}
