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
    this.storeKeys = ['photographersListAll', 'isLoaded', 'keys', 'language'];
  }

  componentDidMount() {
    actions.getData();
  }

  render() {
    const {
      keys, isLoaded, photographersListAll, language, dayOfWeek,
    } = this.state;
    if (!isLoaded) {
      return <h2>Loading</h2>;
    }
    const info = photographersListAll[dayOfWeek][keys[dayOfWeek]][language];
    const media = photographersListAll[dayOfWeek][keys[dayOfWeek]];
    return (
      <div className='wrapperHome'>
        <div className='homeAboutSite'>
          <section className='homeAbout'>
            <h3 className='titleName'>Портал о лучших фотографах Беларуси</h3>
            <p className='descriptionSite'>Любое мастерство требует развития, расширения кругозора и, зачастую, признания общественности. Искусство фотографии – не исключение.
              Помимо занятий в фотошколе и собственного опыта, фотографу любого уровня следует обратить внимание на фотосайты для фотографов,
              чтобы почерпнуть важную информацию, быть в курсе новинок сферы фотографии и, конечно, зарабатывать на своем ремесле.
            </p>
            <p className='descriptionSite'>Один из лучших способов понять стиль работы любого фотографа – изучить его блог. Это еще и очень интересно –
              следить за развитием профессионализма и событиями в жизни человека. Сайты профессиональных фотографов и фотоблоги обычно содержат
              фотоотчеты одного автора в хронологическом порядке и минимум текста, что объясняется привычкой фотографов говорить с миром на языке фото.
            </p>
          </section>
          <section className='homeFotogDay'>
            <h2 className='titleFotogDay titleName'>Фотограф дня</h2>
            <Photographer language={language} info={info} media={media} />
          </section>
        </div>
        <div>
          <h3 className='titleName'>Команда проекта</h3>
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
