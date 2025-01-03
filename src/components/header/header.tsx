import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({ children }: any) => {
  return <header className="header">{children}</header>;
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
