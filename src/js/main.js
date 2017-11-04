//const foo = require('./foo.js');
const db = require('./db.js');
import React from 'react';
import ReactDom from 'react-dom';
import css from '../css/main.scss';

console.log('date', new Date());
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
db.test();
db.info();

class App extends React.Component {
    render(){
       return(
           <div>
              <h1> the list  : update : hello, again</h1>
              <h2>another line</h2>
           </div>
        );
     }
}

ReactDom.render(<App/>, document.getElementById('root'));
