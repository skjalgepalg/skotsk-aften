import Reveal from 'reveal';

import * as map from './map';

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  // default/cube/page/concave/zoom/linear/fade/none
  transition: 'linear'
});

map.initialize();
