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
import Map from './Map';

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
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.map = React.createRef();
  }

  render() {
    return (
      <>
        <Map ref={this.map} />
        <Deck transition={['fade']} transitionDuration={500} theme={theme}>
          <Slide transition={['fade']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Skotsk aften
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Etymologi
            </Heading>
            <Text textColor="secondary">
              Av gaelisk "Uisge beatha" (<code>usquebaugh</code>)
            </Text>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Kategorier
            </Heading>
            <Appear>
              <Text textColor="tertiary">Single Malt Scotch Whisky</Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary">Single Grain Scotch Whisky</Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary">Blended Scotch Whisky</Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary">Blended Malt Scotch Whisky</Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary">Blended Grain Scotch Whisky</Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary">Malting</Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary">Mesking</Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary">Fermentering</Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary">Destillering</Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fremstilling
            </Heading>
            <Text textColor="tertiary">Lagring</Text>
            <Image fit src={images.malting} />
          </Slide>
          <Slide>
            <Heading>Regioner</Heading>
          </Slide>
          <Slide>
            <Heading>Lowland</Heading>
          </Slide>
          <Slide>
            <Heading>Highland</Heading>
          </Slide>
          <Slide>
            <Heading>Speyside</Heading>
          </Slide>
          <Slide>
            <Heading>Island</Heading>
          </Slide>
          <Slide>
            <Heading>Campbeltown</Heading>
          </Slide>
          <Slide>
            <Heading>Islay</Heading>
          </Slide>
        </Deck>
      </>
    );
  }
}
