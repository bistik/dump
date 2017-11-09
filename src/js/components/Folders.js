import React from 'react';

class Folders extends React.Component {
  render() {
    return (
      <div className="col-4 sidebar-folders">
        <p><a href="#">hide folders</a></p>
        <ul className="list-unstyled">
          <li>Recipes</li>
          <li>Christmas wishlist</li>
          <li>Backyard garden</li>
        </ul>
      </div>
    );
  }
}

export default Folders;