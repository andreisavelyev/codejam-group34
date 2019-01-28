/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../css/Home.css';
import PhotographerVideo from './Video';

const translatedPoints = {
  bel: {
    dateOfBirth: 'Дата нараджэння:',
    placeOfBirth: 'Месца нараджэння:',
    dateOfDeath: 'Дата смерці:',
    almaMater: 'Альма-матар:',
    typeOfActivity: 'Род дзейнасці:',
    Biography: 'Біяграфія:',
  },
  eng: {
    dateOfBirth: 'Born:',
    placeOfBirth: 'Place of Birth:',
    dateOfDeath: 'Died:',
    almaMater: 'Alma-mater:',
    typeOfActivity: 'Occupation:',
    Biography: 'Biography:',
  },
  rus: {
    dateOfBirth: 'Дата рождения:',
    placeOfBirth: 'Место рождения:',
    dateOfDeath: 'Дата смерти:',
    almaMater: 'Альма-матер:',
    typeOfActivity: 'Род деятельности:',
    Biography: 'Биография:',
  }
};

function Photographer(props) {
  return (
    <React.Fragment>
      <h2 className='ph-name'>{ props.info.name }</h2>
      <img className='ph-img' src={props.media.photo} alt='Foto Photographer' />
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].dateOfBirth }
        </span>
        {props.info.dateOfBirth}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].placeOfBirth }
        </span>
        {props.info.placeOfBirth}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].dateOfDeath }
        </span>
        {props.info.dateOfDeath}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].almaMater }
        </span>
        {props.info.almaMater}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].typeOfActivity }
        </span>
        {props.info.typeOfActivity}
      </p>
      <h2 className='ph-info'>{ translatedPoints[props.language].Biography }</h2>
      <p>{props.info.Biography}</p>
      <PhotographerVideo video={props.media.video} />
    </React.Fragment>
  );
}

export default Photographer;
