import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationItem = ({ link, exact, children }) => (
  <li>
    <NavLink exact={exact} to={link} activeClassName="active">
      {children}
    </NavLink>
  </li>
);