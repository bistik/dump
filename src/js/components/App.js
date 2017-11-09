import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import MainLeftNav from './MainLeftNav';
import Overview from './Overview';
import Todo from './Todo';
import Notes from './Notes';
import Reminders from './Reminders';
import Settings from './Settings';

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
            <div className="col-9">
              <Route exact path="/overview" component={Overview} />
              <Route path="/todo" component={Todo} />
              <Route path="/notes" component={Notes} />
              <Route path="/reminders" component={Reminders} />
              <Route path="/settings" component={Settings} />
            </div>
         </div>
       </HashRouter>
      );
   }
}

export default App;
