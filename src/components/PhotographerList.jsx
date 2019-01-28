import React from 'react';
import Reflux from 'reflux';
import actions from '../actions';
import Store from '../Store';
import Photographers from './Photographers';
import Searchbar from './Searchbar';
import Photographer from './Photographer';


class PhotographerList extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = Store;
    this.storeKeys = ['photographersListAll', 'isLoaded', 'language', 'searchedPhotoghrapher'];
  }

  render() {
    const { language, searchedPhotoghrapher } = this.state;
    const info = searchedPhotoghrapher[language];
    const media = searchedPhotoghrapher;
    if (searchedPhotoghrapher) {
      return (
        <React.Fragment>
          <Searchbar />
          <Photographers />
          <Photographer language={language} info={info} media={media} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Searchbar />
        <Photographers />
      </React.Fragment>
    );
  }
}

export default PhotographerList;
