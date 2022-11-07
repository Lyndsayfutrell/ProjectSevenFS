import React from "react";
import { NavLink } from 'react-router-dom';

function Nav({ search }) {

  

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats" onClick={() => search('cats')}>Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs" onClick={() => search('dogs')}>Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computers" onClick={() => search('computers')}>Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
