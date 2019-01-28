/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Reflux from 'reflux';
import Store from '../Store';

import actions from '../actions';
import '../css/Home.css';
import Photographer from './Photographer';
import avatarSburnt from '../img/avatorSerg.jpg';
import avatorAndr from '../img/avatorAndr.jpg';
import avatorIlyay from '../img/avatorIlyay.png';

class Home extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: new Date().getDay(),
    };
    this.store = Store;
    this.storeKeys = ['photographersListAll', 'isLoaded', 'keys', 'language', 'homeTranslations', 'homeIsLoaded'];
  }

  componentDidMount() {
    actions.getData();
    actions.getTranslations();
  }

  render() {
    const {
      keys, isLoaded, photographersListAll, language, dayOfWeek, homeTranslations, homeIsLoaded,
    } = this.state;
    if (!isLoaded || !homeIsLoaded) {
      return <h2>Loading</h2>;
    }
    const info = photographersListAll[dayOfWeek][keys[dayOfWeek]][language];
    const media = photographersListAll[dayOfWeek][keys[dayOfWeek]];
    const description = homeTranslations[0][language];
    const team = language === 'bel' ? 'Каманда праекта' : language === 'rus' ? 'Команда проекта' : 'Project team';
    const photographerOfDay = language === 'bel' ? 'Фатограф дня' : language === 'rus' ? 'Фотограф дня' : 'Photographer of the day';
    return (
      <div className='wrapperHome'>
        <div className='homeAboutSite'>
          <section className='homeAbout'>
            <h3 className='titleName'>{description.title}</h3>
            <p className='descriptionSite'> {description.first} </p>
            <p className='descriptionSite'>{description.second}</p>
          </section>
          <section className='homeFotogDay'>
            <h2 className='titleFotogDay titleName'>{photographerOfDay}</h2>
            <Photographer language={language} info={info} media={media} />
          </section>
        </div>
        <div>
          <h3 className='titleName'>{team}</h3>
          <div className='projectTeam'>
            <figure className='projectUser'>
              <a href='https://github.com/andreisavelyev' target='_blank' rel='noopener noreferrer'>
                <img className='projectUserAvatar' src={avatorAndr} alt='Avatar andreisavelyev' />
              </a>
              <p className='ph-name'>
                <a href='https://github.com/andreisavelyev' target='_blank' rel='noopener noreferrer'>andreisavelyev</a>
              </p>
              <p className='ph-name'>Andrei Savelyeu</p>
            </figure>
            <figure className='projectUser'>
              <a href='https://github.com/SBurnt' target='_blank' rel='noopener noreferrer'>
                <img className='projectUserAvatar' src={avatarSburnt} alt='Avatar Sburnt' />
              </a>
              <p className='ph-name'>
                <a href='https://github.com/SBurnt' target='_blank' rel='noopener noreferrer'>Sburnt</a>
              </p>
              <p className='ph-name'>Siarhei Pashkevich</p>
            </figure>
            <figure className='projectUser'>
              <a href='https://github.com/ilyay95' target='_blank' rel='noopener noreferrer'>
                <img className='projectUserAvatar' src={avatorIlyay} alt='Avatar ilyay95' />
              </a>
              <p className='ph-name'>
                <a href='https://github.com/ilyay95' target='_blank' rel='noopener noreferrer'>ilyay95</a>
              </p>
              <p className='ph-name'>Ilya Yatsuk</p>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
