import './app.css';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from 'spectacle';
import Map, { defaultCenter } from './Map';

// Import React
import React from 'react';
import Slide from './Slide';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  aging: require('../assets/aging.jpg'),
  fermenting: require('../assets/fermenting.jpg'),
  malting: require('../assets/malting.jpg'),
  mashing: require('../assets/mashing.jpg'),
  stills: require('../assets/stills.jpg')
};

// Require CSS
require('normalize.css');

const blue = '#a1cdff';
const pink = '#ca317d';
const gray = '#343332';
const green = '#a1ffb2';

const theme = createTheme(
  {
    primary: 'transparent',
    secondary: blue,
    tertiary: pink,
    gray: gray,
    green: green
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
    this.video = React.createRef();
    this.panToDefault = this.panToDefault.bind(this);
  }

  panToDefault() {
    this.map.current.panTo({ ...defaultCenter });
  }

  // TODO: slide steg 1 av 40 -> Skjalg som har laget slides, så strap in!

  render() {
    return (
      <>
        <Map ref={this.map} />
        <Deck transitionDuration={500} theme={theme}>
          <Slide bgColor='primary' onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
              Whisky
            </Heading>
            <Appear>
              <Text fit caps textColor='tertiary' textFont='secondary'>
                (fra hele verden)
              </Text>
            </Appear>
          </Slide>

          <Slide
            onEnter={() => {
              this.video.current.play();
            }}
          >
            <video
              loop
              className='nick'
              ref={this.video}
              src={require('../assets/Nick_lagavulin.mp4')}
            />
          </Slide>

          <Slide bgColor='tertiary'>
            <Heading fit caps textColor='gray'>
              Endelig...
            </Heading>
          </Slide>

          {[
            {
              name: 'Jameson Select Reserve Black Barrel',
              region: 'Irland',
              abv: 40,
              casks: 'Double-charred ex-bourbon',
              panTo: {
                longitude: -8.745647,
                latitude: 52.741558,
                zoom: 6
              }
            },
            {
              name: 'Nikka Coffey Grain',
              region: 'Japan',
              abv: 45,
              casks: 'Ukjent',
              panTo: {
                longitude: 129.9857494,
                latitude: 36.8781962,
                zoom: 4.5
              }
            },
            {
              name: 'Mackmyra Skördetid',
              region: 'Sverige',
              abv: 46.1,
              casks: 'Svensk eik, sluttlagret på amarone-fat',
              panTo: {
                longitude: 13.3268579,
                latitude: 61.8383337,
                zoom: 5.56
              }
            },
            {
              name: "Jack Daniel's SB",
              region: 'Tennessee, USA',
              abv: 45,
              casks: 'American virgin oak',
              panTo: {
                longitude: -86.3694619,
                latitude: 35.2809192,
                zoom: 15.49
              }
            },
            {
              name: 'Kavalan Solist ex-bourbon',
              region: 'Taiwan',
              abv: 59.4,
              casks: 'Ex-bourbon',
              panTo: {
                longitude: 123.1929874,
                latitude: 29.0246801,
                zoom: 5.86
              }
            }
          ].map(dram => (
            <Slide
              key={dram.name}
              onEnter={() => {
                this.map.current.clearMarkers();
                this.map.current.addMarkers(
                  d => d.properties.region === dram.region,
                  d => d.properties.name === dram.distillery
                );
                this.map.current.panTo(dram.panTo);
              }}
              align='flex-start flex-start'
            >
              <Heading caps>{dram.name}</Heading>

              <div className='bottom'>
                <Table textColor='green' align='flex-end'>
                  <TableBody>
                    <TableRow>
                      <TableHeaderItem textAlign='left'>Region</TableHeaderItem>
                      <TableItem textAlign='left'>{dram.region}</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableHeaderItem textAlign='left'>
                        Alkoholprosent
                      </TableHeaderItem>
                      <TableItem textAlign='left'>{dram.abv}%</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableHeaderItem textAlign='left'>
                        Lagret på
                      </TableHeaderItem>
                      <TableItem textAlign='left'>{dram.casks}</TableItem>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Slide>
          ))}
        </Deck>
      </>
    );
  }
}
