/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../css/Home.css';

function Photographer(props) {
  // const info = Object.keys(props.info).filter(item => item !== 'Biography' && item !== 'name');
  if (props.language === 'bel') {
    return (
      <React.Fragment>
        <h2 className='ph-name'>{ props.info.name }</h2>
        <img className='ph-img' src={props.media.photo} alt='Foto Photographer' />
        <p>
          <span className='ph-info'>Дата нараджэння: </span>
          {props.info.dateOfBirth}
        </p>
        <p>
          <span className='ph-info'>Месца нараджэння: </span>
          {props.info.placeOfBirth}
        </p>
        <p>
          <span className='ph-info'>Дата смерці: </span>
          {props.info.dateOfDeath}
        </p>
        <p>
          <span className='ph-info'>Альма-матар: </span>
          {props.info.almaMater}
        </p>
        <p>
          <span className='ph-info'>Род дзейнасці: </span>
          {props.info.typeOfActivity}
        </p>
        <h2 className='ph-info'>Біяграфія:</h2>
        <p>{props.info.Biography}</p>
      </React.Fragment>
    );
  } if (props.language === 'eng') {
    return (
      <React.Fragment>
        <h2 className='ph-name'>{ props.info.name }</h2>
        <img className='ph-img' src={props.media.photo} alt='Foto Photographer' />
        <p>
          <span className='ph-info'>Born: </span>
          {props.info.dateOfBirth}
        </p>
        <p>
          <span className='ph-info'>Place of Birth: </span>
          {props.info.placeOfBirth}
        </p>
        <p>
          <span className='ph-info'>Died: </span>
          {props.info.dateOfDeath}
        </p>
        <p>
          <span className='ph-info'>Alma-mater: </span>
          {props.info.almaMater}
        </p>
        <p>
          <span className='ph-info'>Occupation: </span>
          {props.info.typeOfActivity}
        </p>
        <h2 className='ph-info'>Biography:</h2>
        <p>{props.info.Biography}</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h2 className='ph-name'>{ props.info.name }</h2>
      <img className='ph-img' src={props.media.photo} alt='Foto Photographer' />
      <p>
        <span className='ph-info'>Дата рождения: </span>
        {props.info.dateOfBirth}
      </p>
      <p>
        <span className='ph-info'>Место рождения: </span>
        {props.info.placeOfBirth}
      </p>
      <p>
        <span className='ph-info'>Дата смерти: </span>
        {props.info.dateOfDeath}
      </p>
      <p>
        <span className='ph-info'>Альма-матер: </span>
        {props.info.almaMater}
      </p>
      <p>
        <span className='ph-info'>Род деятельности: </span>
        {props.info.typeOfActivity}
      </p>
      <h2 className='ph-info'>Биография:</h2>
      <p>{props.info.Biography}</p>
    </React.Fragment>
  );
}

export default Photographer;
