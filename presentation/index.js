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
    this.state = {
      suchArr: false
    };
  }

  panToDefault() {
    this.map.current.panTo({ ...defaultCenter });
  }

  // TODO: slide steg 1 av 40 -> Skjalg som har laget slides, så strap in!
  getSuchArr = () => Array.apply(null, { length: 40 }).map(Number.call, Number);

  render() {
    return (
      <>
        <Map ref={this.map} />
        <Deck transitionDuration={500} theme={theme}>
          <Slide
            bgColor='primary'
            onEnter={() => {
              this.map.current.clearMarkers();
              this.map.current.panTo({
                longitude: -4.9,
                latitude: 56.808,
                zoom: 6.5
              });
            }}
          >
            <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
              Whisky
            </Heading>
            <Appear onAnim={() => this.setState(() => ({ suchArr: true }))}>
              <Text fit caps textColor='tertiary' textFont='secondary'>
                ...strap in
              </Text>
            </Appear>
          </Slide>
          <Slide
            bgColor='primary'
            onEnter={() => {
              this.setState(state => ({ suchArr: false }));
              this.panToDefault();
            }}
          >
            <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
              Whisky
            </Heading>
            <Text fit caps textColor='tertiary' textFont='secondary'>
              (fra hele verden)
            </Text>
          </Slide>

          {this.state.suchArr &&
            this.getSuchArr().map((_, i) => (
              <Slide key={i} bgColor='tertiary'>
                <Heading fit caps textColor='gray'>
                  wow such slide
                </Heading>
              </Slide>
            ))}

          {[
            {
              name: 'Jameson Select Reserve Black Barrel',
              distillery: 'New Midleton Distillery',
              region: 'Irland',
              abv: 40,
              still: 'Pot og column still',
              casks: 'Double-charred ex-bourbon, ex-bourbon og sherry',
              panTo: {
                longitude: -8.745647,
                latitude: 53.741558,
                zoom: 5.8
              }
            },
            {
              name: 'Nikka Coffey Grain',
              distillery: 'Nikka Whisky Sendai Factory',
              region: 'Japan',
              abv: 45,
              still: 'Coffey still',
              casks: 'Ukjent',
              panTo: {
                longitude: 129.9857494,
                latitude: 36.8781962,
                zoom: 4.5
              }
            },
            {
              name: 'Mackmyra Skördetid',
              distillery: 'Mackmyra Distillery',
              region: 'Sverige',
              abv: 46.1,
              still: 'Pot still',
              casks: 'Svensk eik, sluttlagret på Masi amarone-fat',
              panTo: {
                longitude: 13.3268579,
                latitude: 61.8383337,
                zoom: 5.56
              }
            },
            {
              name: "Jack Daniel's SB",
              distillery: "Jack Daniel's Distillery",
              region: 'Tennessee, USA',
              abv: 45,
              still: 'Pot still, Lincoln County Process',
              casks: 'American virgin oak',
              panTo: {
                longitude: -86.2217589,
                latitude: 35.8141364,
                zoom: 5
              }
            },
            {
              name: 'Kavalan Solist ex-bourbon',
              distillery: 'Kavalan Distillery',
              region: 'Taiwan',
              abv: 59.4,
              still: 'Pot still',
              casks: 'Ex-bourbon',
              panTo: {
                longitude: 117.7415021,
                latitude: 25.4026575,
                zoom: 5.6
              }
            }
          ].map(dram => [
            <Slide
              key={dram.name + '_primary'}
              bgColor='primary'
              onEnter={() => {
                this.map.current.clearMarkers();
                this.map.current.addMarkers(
                  d => d.properties.region === dram.region,
                  d => d.properties.name === dram.distillery
                );
                this.panToDefault();
              }}
            >
              <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
                {dram.region}
              </Heading>
            </Slide>,
            <Slide
              key={dram.name}
              onEnter={() => {
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
                    <TableRow>
                      <TableHeaderItem textAlign='left'>
                        Prosess
                      </TableHeaderItem>
                      <TableItem textAlign='left'>{dram.still}</TableItem>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Slide>
          ])}

          <Slide
            onEnter={() => {
              this.panToDefault();
              this.map.current.clearMarkers();
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
              Takk for alt
            </Heading>
          </Slide>
        </Deck>
      </>
    );
  }
}
