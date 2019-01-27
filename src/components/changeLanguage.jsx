import React from 'react';

function ChangeLanguage(props) {
  return (
    <button onClick={props.onChangeLanguage}>{props.title}</button>
  )
}

export default ChangeLanguage;