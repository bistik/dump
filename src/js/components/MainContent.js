import React from 'react';
import Homepage from './Homepage';

class MainContent extends React.Component {
  render () {
    if (this.props.selected == 'home') {
      return (
          <Homepage />
      )
    }
    if (this.props.selected == 'overview') {
      return (
        <div>
          Overview Content
        </div>
      );
    }
    return (
      <div>
        Main Content
      </div>
    );
  }
}

export default MainContent;
