import React, { Component } from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import CreateDream from '../dreams/createDream';


class NavBar extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper blue-grey darken-3">
            <a href="/"  style={styles.logo}>dreams planned true</a>
            <SignedInLinks/>
            <SignedOutLinks/>
          </div>
        </nav>
          <CreateDream/>
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
