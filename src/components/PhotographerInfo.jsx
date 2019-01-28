import React from 'react';
import Reflux from 'reflux';
import actions from '../actions';
import Store from '../Store';
import Photographer from './Photographer';

class PhotographerInfo extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      photographer: [],
    };

    this.store = Store;
    this.storeKeys = ['photographersListAll', 'isLoaded', 'keys', 'language'];
  }

  componentDidMount() {
    actions.getDataFromRouter();
  }

  render() {
    const {
      photographersListAll, isLoaded, keys, language,
    } = this.state;

    if (isLoaded) {
      const id = this.props.match.params.photographer;
      const info = photographersListAll[id][keys[id]][language];
      const media = photographersListAll[id][keys[id]];
      return (
        <Photographer language={language} info={info} media={media} />
      );
    }
    return <p>Loading</p>  
  }
}

export default PhotographerInfo;