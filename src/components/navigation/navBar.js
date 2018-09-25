import React, { Component } from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';


class NavBar extends Component {
  render() {
    return (
        <div className="container">
        Dreams Planned True
          <SignedInLinks/>
          <SignedOutLinks/>
        </div>
    );
  }
}

export default NavBar;
