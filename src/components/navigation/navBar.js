import React, { Component } from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';


class NavBar extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper teal darken-4">
            <a href="#" style={styles.logo}>dreams planned true</a>
            <SignedInLinks/>
          </div>
        </nav>
      </div>
    );
  }
}

const styles = {
    logo: {
      paddingLeft: 10,
      fontSize: 17,
     }
   }

export default NavBar;
