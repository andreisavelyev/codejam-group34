import React from 'react';
import { withRouter } from 'react-router-dom';
import Reflux from 'reflux';
import Store from '../Store';

import HeaderLink from './HeaderLink';
import '../css/Header.css';
import ChangeLanguage from './changeLanguage';

class Header extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
    this.storeKeys = ['language'];
  }

  render() {
    const arr = ['bel', 'rus', 'eng'];
    const { language } = this.state;
    const title = language === 'bel' ? 'Фатографы Беларусi' : language === 'rus' ? 'Фотографы Беларуси' : 'Photographers of Belarus';
    const homeLink = language === 'bel' ? 'Дахаты' : language === 'rus' ? 'Домой' : 'Home';
    const photographersLink = language === 'bel' ? 'Фатографы' : language === 'rus' ? 'Фотографы' : 'Photographers';
    return (
      <header className='header'>
        <section>
          <a href='#id' target='_blank' rel='noopener noreferrer'>
            <h1 className='header-logo' id='logo'>{title}</h1>
          </a>
        </section>
        <section>
          <nav className='header-nav'>
            <HeaderLink exact to='/' className='header-nav-tab'>{homeLink}</HeaderLink>
            <HeaderLink to='/photographers' className='header-nav-tab'>{photographersLink}</HeaderLink>
          </nav>
        </section>
        <section>
          {arr.map(item => (
            <ChangeLanguage
              onChangeLanguage={this.props.onChangeLanguage}
              title={item}
              key={item}
            />
          ))}
        </section>
      </header>
    );
  }
}

export default withRouter(Header);
