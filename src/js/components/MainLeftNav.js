import React from 'react';

class MainLeftNav extends React.Component {
  render() {
    return (
      <nav className="bg-light col-xs-3 sidebar mr-5">
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">Overview</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Folders</a>
            </li>
            <li>
              <a href="#" className="nav-link">Todo</a>
            </li>
            <li>
              <a href="#" className="nav-link">Notes</a>
            </li>
            <li>
              <a href="#" className="nav-link">Reminders</a>
            </li>
            <li>
              <a href="#" className="nav-link">Notes</a>
            </li>
            <li>
              <a href="#" className="nav-link">Lists</a>
            </li>
            <li>
              <a href="#" className="nav-link">Settings</a>
            </li>
        </ul>
      </nav>
    );
  }
}

module.exports = MainLeftNav;
