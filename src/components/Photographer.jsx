import React from 'react';

function Photographer (props) {
  // const info = Object.keys(props.info).filter(item => item !== 'Biography' && item !== 'name');
  if (props.language === 'bel') {
    return (
      <React.Fragment>
      <h2>{ props.info.name }</h2>
      <img src={props.media.photo} />
      <p>Дата нараджэння: {props.info.dateOfBirth}</p>
      <p>Месца нараджэння: {props.info.placeOfBirth}</p>
      <p>Дата смерці: {props.info.dateOfDeath}</p>
      <p>Альма-матар: {props.info.almaMater}</p>
      <p>Род дзейнасці: {props.info.typeOfActivity}</p>
      <h2>Біяграфія</h2>
      <p>{props.info.Biography}</p>
      </React.Fragment>
    );
  } if (props.language === 'eng') {
    return (
      <React.Fragment>
      <h2>{ props.info.name }</h2>
      <img src={props.media.photo} />
      <p>Born: {props.info.dateOfBirth}</p>
      <p>Place of Birth: {props.info.placeOfBirth}</p>
      <p>Died: {props.info.dateOfDeath}</p>
      <p>Alma-mater: {props.info.almaMater}</p>
      <p>Occupation: {props.info.typeOfActivity}</p>
      <h2>Biography</h2>
      <p>{props.info.Biography}</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
    <h2>{ props.info.name }</h2>
    <img src={props.media.photo} />
    <p>Дата рождения: {props.info.dateOfBirth}</p>
    <p>Место рождения: {props.info.placeOfBirth}</p>
    <p>Дата смерти: {props.info.dateOfDeath}</p>
    <p>Альма-матер: {props.info.almaMater}</p>
    <p>Род деятельности: {props.info.typeOfActivity}</p>
    <h2>Биография</h2>
    <p>{props.info.Biography}</p>
    </React.Fragment>
  );

}

export default Photographer;