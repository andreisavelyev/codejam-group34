import React from 'react';
import '../css/Header.css';

function ChangeLanguage(props) {
  return (
    <button type='button' className='btnOnChangeLanguage' onClick={props.onChangeLanguage}>{props.title}</button>
  );
}

export default ChangeLanguage;
