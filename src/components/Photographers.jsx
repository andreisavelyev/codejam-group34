/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import Reflux from 'reflux';
import actions from '../actions';
import Store from '../Store';

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
    if (isLoaded) {
      return (
        <section>
          { photographersListAll.map((item, index) => (
            <Link to={`/photographers/${index}`} key={`link${index}`}>
              { item[keys[index]][language].name }
            </Link>
          )) }
        </section>
      );
    }
    return (
      <p>loading...</p>
    );
  }
}

export default Photographers;
