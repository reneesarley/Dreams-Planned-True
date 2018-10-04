import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
  return(
    <ul className="right modal-trigger">
      <li><a href="#modal1">add dream</a></li>
      <li><a href="/">log out</a></li>
    </ul>
  );
}

export default SignedInLinks;
