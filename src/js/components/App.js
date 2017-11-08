import React from 'react';
import MainLeftNav from './MainLeftNav';
import MainContent from './MainContent';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      content: 'home'
    };
  }

  handleMenuChange(selected, event) {
    event.preventDefault();
    console.log('selected', selected);
    console.log('event', event.target.href);
    this.setState({
      content: selected
    })
  }

  render(){

     return(
         <div className="row">
            <MainLeftNav handler={this.handleMenuChange.bind(this, this.props.href)}/>
            <MainContent selected={this.state.content} />
         </div>
      );
   }
}

export default App;
