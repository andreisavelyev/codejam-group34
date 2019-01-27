import React from 'react';
import Reflux from 'reflux';
import Store from '../Store';

import actions from '../actions';
import '../css/Home.css';
import Photographer from './Photographer';
import Photographers from './Photographers';

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
      <Photographer language={language} info={info} media={media} />
    );
  }
}

export default Home;
