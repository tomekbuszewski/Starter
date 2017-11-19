import React from 'react';
import { render as reactRender } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './js/App';

const rootEl = document.getElementById('root');
const render = Component =>
  reactRender(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
module.hot.accept('./js/App', () => render(require('./js/App').default));
