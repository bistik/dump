import React from 'react';
import Folders from './Folders';

class Notes extends React.Component {
  render() {
    return (
      <div className="col-xs-9">
          <div className="row">
            <Folders />
            <div className="col-8 p-0" style={{width: '100%'}}>
              <input type="text" className="form-control" placeholder="Title of note..." />
              <textarea className="form-control" placeholder="Note body..."></textarea>
            </div>
          </div>
      </div>
    );
  }
}

export default Notes;