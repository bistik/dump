import React from 'react';
import { NavLink } from 'react-router-dom';

class MainLeftNav extends React.Component {
  render() {
    return (
      <nav className="col-2 sidebar pt-3 pb-3">
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/overview" className="nav-link" activeClassName="active">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/todo" className="nav-link" activeClassName="active">Todo</NavLink>
            </li>
            <li>
              <NavLink to="/notes" className="nav-link" activeClassName="active">Notes</NavLink>
            </li>
            <li>
              <NavLink to="/reminders" className="nav-link" activeClassName="active">Reminders</NavLink>
            </li>
            <li>
              <NavLink to="/calendar" className="nav-link" activeClassName="active">Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/query" className="nav-link" activeClassName="active">Query</NavLink>
            </li>
            <li>
              <NavLink to="/settings" className="nav-link" activeClassName="active">Settings</NavLink>
            </li>
        </ul>
      </nav>
    );
  }
}

module.exports = MainLeftNav;
