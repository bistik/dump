import React from 'react';
import { NavLink } from 'react-router-dom';

class MainLeftNav extends React.Component {
  render() {
    return (
      <nav className="bg-light col-xs-3 sidebar mr-5">
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/overview" className="nav-link" activeClassName="active">Overview</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/folders" className="nav-link" activeClassName="active">Folders</NavLink>
            </li>
            <li>
              <NavLink to="/todo" className="nav-link" activeClassName="active">Todo</NavLink>
            </li>
            <li>
              <a href="#" className="nav-link">Notes</a>
            </li>
            <li>
              <a href="#" className="nav-link">Reminders</a>
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
