import React from 'react';
import { withRouter } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import '../css/Header.css';
import ChangeLanguage from './changeLanguage';

function Header(props) {
  const arr = ['bel', 'rus', 'eng'];
  return (
    <header className='header'>
      <section>
        <a href='#id' target='_blank' rel='noopener noreferrer'>
          <h1 className='header-logo' id='logo'>Photographers of Belarus</h1>
        </a>
      </section>
      <section>
        <nav className='header-nav'>
          <HeaderLink exact to='/' className='header-nav-tab'>Home</HeaderLink>
          <HeaderLink to='/photographers' className='header-nav-tab'>Photographers</HeaderLink>
        </nav>
      </section>
      <section>
        {arr.map(item => (
          <ChangeLanguage
            onChangeLanguage={props.onChangeLanguage}
            title={item}
            key={item}
          />
        ))}
      </section>
    </header>
  );
}

export default withRouter(Header);
