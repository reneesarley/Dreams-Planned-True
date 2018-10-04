import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return(
    <ul class="right">
      <li><a href="/signin">sign in</a></li>
      <li><a href="/signup">sign up</a></li>
    </ul>
  );

}

export default SignedOutLinks;
