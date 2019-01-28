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
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  Text,
  Appear
} from 'spectacle';

import './app.css';

import Slide from './Slide';
import Map, { defaultCenter } from './Map';

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

  render() {
    return (
      <>
        <Map ref={this.map} />
        <Deck transitionDuration={500} theme={theme}>
          <Slide bgColor="primary" onEnter={this.panToDefault}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Whisky
            </Heading>
            <Appear>
              <Text fit caps textColor="tertiary" textFont="secondary">
                (fra Skotland)
              </Text>
            </Appear>
          </Slide>

          <Slide onEnter={this.panToDefault} bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="gray">
              Kategorier
            </Heading>
          </Slide>

          {[
            'Single Malt',
            'Single Grain',
            'Blended',
            'Blended Malt',
            'Blended Grain'
          ].map(category => (
            <Slide onEnter={this.panToDefault}>
              <>
                <Heading caps size={1} textColor="tertiary" textFont="primary">
                  {category}
                </Heading>
                <Heading
                  align="flex-end"
                  caps
                  size={1}
                  textColor="tertiary"
                  textFont="primary"
                >
                  Scotch Whisky
                </Heading>
              </>
            </Slide>
          ))}

          <Slide onEnter={this.panToDefault} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="gray">
              Fremstilling
            </Heading>
          </Slide>

          {[
            { text: 'Malting', image: images.malting },
            { text: 'Mesking', image: images.mashing },
            { text: 'Fermentering', image: images.fermenting },
            { text: 'Destillering', image: images.stills },
            { text: 'Lagring', image: images.aging }
          ].map(step => (
            <Slide
              onEnter={this.panToDefault}
              bgImage={step.image}
              bgDarken={0.65}
            >
              <Heading fit caps textColor="secondary">
                {step.text}
              </Heading>
            </Slide>
          ))}

          <Slide
            onEnter={() => {
              this.video.current.play();
            }}
          >
            <video
              loop
              className="nick"
              ref={this.video}
              src={require('../assets/Nick_lagavulin.mp4')}
            />
          </Slide>

          <Slide bgColor="green">
            <Heading fit caps textSize={1}>
              Regioner
            </Heading>
          </Slide>

          {[
            {
              name: 'Lowland',
              panTo: {
                latitude: 55.42,
                longitude: -3.48
              }
            },
            {
              name: 'Highland',
              panTo: defaultCenter
            },
            {
              name: 'Speyside',
              panTo: {
                latitude: 57.54,
                longitude: -3.26
              }
            },
            {
              name: 'Island',
              panTo: {
                latitude: defaultCenter.latitude + 0.5,
                longitude: defaultCenter.longitude,
                zoom: 6
              }
            },
            {
              name: 'Campbeltown',
              panTo: {
                latitude: 55.57,
                longitude: -5.56,
                zoom: 8
              }
            },
            {
              name: 'Islay',
              panTo: {
                latitude: 55.76,
                longitude: -6.2,
                zoom: 10
              }
            }
          ].map(region => (
            <Slide
              align="flex-start"
              onEnter={() => {
                this.map.current.panTo(region.panTo);
                this.map.current.clearMarkers();
                this.map.current.addMarkers(
                  d => d.properties.region === region.name,
                  () => true
                );
              }}
            >
              <Heading caps textColor="green">
                {region.name}
              </Heading>
            </Slide>
          ))}

          <Slide bgColor="tertiary">
            <Heading fit caps textColor="gray">
              Endelig...
            </Heading>
          </Slide>

          {[
            {
              name: 'Auchentoshan Three Wood',
              region: 'Lowland',
              distillery: 'Auchentoshan',
              abv: 43,
              casks: 'Bourbon, Olorosso sherry, Pedro Ximenez sherry',
              panTo: {
                latitude: 55.42,
                longitude: -3.48
              }
            },
            {
              name: 'Glengoyne 12',
              region: 'Highland',
              distillery: 'Glengoyne',
              abv: 43,
              casks: 'Bourbon, Sherry',
              panTo: defaultCenter
            },
            {
              name: 'Aberlour 16',
              region: 'Speyside',
              distillery: 'Aberlour',
              abv: 40,
              casks: 'Bourbon, Sherry',
              panTo: {
                latitude: 57.54,
                longitude: -3.26
              }
            },
            {
              name: 'Kilkerran 12',
              region: 'Campbeltown',
              distillery: 'Glengyle',
              abv: 46,
              casks: 'Bourbon',
              panTo: {
                latitude: 55.57,
                longitude: -5.56,
                zoom: 8
              }
            },
            {
              name: 'Bruichladdich Islay Barley 2010',
              region: 'Islay',
              distillery: 'Bruichladdich',
              abv: 50,
              casks: 'Bourbon',
              panTo: {
                latitude: 55.76,
                longitude: -6.2,
                zoom: 10
              }
            },
            {
              name: 'Highland Park Kaupang',
              region: 'Island',
              distillery: 'Highland Park',
              abv: 59.7,
              casks: 'Refill sherry butt',
              panTo: {
                latitude: 58.954059,
                longitude: -3.0585737,
                zoom: 10
              }
            },
            {
              name: "Cooper's Choice Ledaig 16 YO",
              region: 'Island',
              distillery: 'Tobermory',
              abv: 55.5,
              casks: 'Sherry',
              panTo: {
                latitude: 56.622787,
                longitude: -6.0792433,
                zoom: 7
              }
            }
          ].map(dram => (
            <Slide
              onEnter={() => {
                this.map.current.clearMarkers();
                this.map.current.addMarkers(
                  d => d.properties.region === dram.region,
                  d => d.properties.name === dram.distillery
                );
                this.map.current.panTo(dram.panTo);
              }}
              align="flex-start flex-start"
            >
              <Heading caps>{dram.name}</Heading>

              <div class="bottom">
                <Table textColor="green" align="flex-end">
                  <TableRow>
                    <TableHeaderItem textAlign="left">Region</TableHeaderItem>
                    <TableItem textAlign="left">{dram.region}</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableHeaderItem textAlign="left">
                      Alkoholprosent
                    </TableHeaderItem>
                    <TableItem textAlign="left">{dram.abv}%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableHeaderItem textAlign="left">
                      Lagret på
                    </TableHeaderItem>
                    <TableItem textAlign="left">{dram.casks}</TableItem>
                  </TableRow>
                </Table>
              </div>
            </Slide>
          ))}
        </Deck>
      </>
    );
  }
}
