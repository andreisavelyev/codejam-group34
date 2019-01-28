/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import Reflux from 'reflux';
import actions from '../actions';
import Store from '../Store';

import '../css/PhotographerList.css';

class Photographers extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      photographer: [],
    };

    this.store = Store;
    this.storeKeys = ['photographersListAll', 'isLoaded', 'keys', 'language'];
  }

  componentDidMount() {
    actions.getData();
  }

  render() {
    const {
      photographersListAll, isLoaded, keys, language,
    } = this.state;

    console.log('props Photographers', photographersListAll);

    if (isLoaded) {
      return (
        <div className='wrapperPhotographerList'>
          { photographersListAll.map((item, index) => (
            <div className='itemFotogr'>
              <div className='imgPhotographerListBlock'>
                <img className='imgPhotographerList' src={item[keys[index]].photo} alt='foto' />
              </div>
              <div>
                <div className='namePhotographerList'>
                  <Link to={`/photographers/${index}`} key={`link${index}`}>
                    { item[keys[index]][language].name }
                  </Link>
                </div>
                <div>
                  <p className='typeOfActivityPhotographerList'>
                    {item[keys[index]][language].typeOfActivity}
                  </p>
                </div>
              </div>
            </div>
          )) }
        </div>
      );
    }
    return (
      <p>loading...</p>
    );
  }
}

export default Photographers;
