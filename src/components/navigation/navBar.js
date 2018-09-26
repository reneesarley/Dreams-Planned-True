import React, { Component } from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { Modal } from 'react-materialize';


class NavBar extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper blue-grey darken-3">
            <a href="#modal1" style={styles.logo}>dreams planned true</a>
            <SignedInLinks/>
          </div>
        </nav>
        <div id="modal1" className="modal">
         <div className="modal-content">
           <h4>Modal Header</h4>
           <p>A bunch of text</p>
         </div>
       </div>
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
