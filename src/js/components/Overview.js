import React from 'react';

class Overview extends React.Component {
  render () {
    return (
      <div className="col-9">
        <div className="row">
          <div className="col-6 p-3">
            <h5>Most Recent items</h5>
            <ul>
              <li>TODO: get a haircut</li>
              <li>TODO: eat julian REMINDER: 3 hours from now</li>
              <li>NOTE: first few words...</li>
            </ul>
          </div>
          <div className="col-3 p-3">
            <h5>Actions</h5>
            <p>
              <button className="btn btn-sm btn-dark">&#43; Todo</button>
            </p>
            <p>
              <button className="btn btn-sm btn-dark">&#43; Note</button>
            </p>
          </div>
          <div className="col-3  p-3">
            <h5>Tips, etc.</h5>
            <p>Backup your database</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Overview;
