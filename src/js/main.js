import Db from './utils/db';
import React from 'react';
import ReactDom from 'react-dom';
import css from '../css/main.scss';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

Db.test();
Db.info();

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)
// ReactDom.render(<App/>, document.getElementById('root'));
//
if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) });
}
