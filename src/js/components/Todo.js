import React from 'react';
import Folders from './Folders';

class Todo extends React.Component {
  render() {
    return (
      <div className="col-xs-9">
        <div className="row">
          <Folders />
          <div className="col-8">
            Todo Content here
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
