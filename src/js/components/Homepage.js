import React from 'react';

class Homepage extends React.Component {
  render () {
    return (
      <div className="col-xs-9">
        <div className="row">
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; Folder</button>
          </div>
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; List</button>
          </div>
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; Reminder</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; Reminder</button>
          </div>
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; Todo</button>
          </div>
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; Note</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 p-3">
            <button className="btn btn-dark">&#43; Reminder</button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Homepage;
