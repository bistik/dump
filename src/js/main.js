//const foo = require('./foo.js');
const db = require('./db.js');
import React from 'react';
import ReactDom from 'react-dom';
import css from '../css/main.scss';
import App from './components/App.js';
import { AppContainer } from 'react-hot-loader';

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('process.env.UPGRADE_EXTENSIONS', process.env.UPGRADE_EXTENSIONS)

db.test();
db.info();

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
