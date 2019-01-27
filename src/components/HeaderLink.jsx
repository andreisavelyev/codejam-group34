import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderLink({ children, ...rest }) {
  return (
    <NavLink activeClassName='nav--active' {...rest}>
      {children}
    </NavLink>
  );
}

export default HeaderLink;
