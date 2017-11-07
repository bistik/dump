import React from 'react';
import MainLeftNav from './MainLeftNav';
import Homepage from './Homepage';

export default class App extends React.Component {
    render(){
       return(
           <div className="row">
              <MainLeftNav />
              <Homepage />
           </div>
        );
     }
}
