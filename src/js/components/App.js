import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import MainLeftNav from './MainLeftNav';
import Overview from './Overview';
import Folders from './Folders';
import Todo from './Todo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      content: 'overview'
    };
  }

  handleMenuChange(event) {
    event.preventDefault();
  }

  render(){

     return(
        <HashRouter>
         <div className="row">
            <MainLeftNav />
            <div className="col-xs-9">
              <Route exact path="/overview" component={Overview} />
              <Route path="/folders" component={Folders} />
              <Route path="/todo" component={Todo} />
            </div>
         </div>
       </HashRouter>
      );
   }
}

export default App;
