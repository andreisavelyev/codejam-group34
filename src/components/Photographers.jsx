import React from 'react';
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
    const { photographersListAll, isLoaded, keys, language } = this.state;
    if (isLoaded) {
      return (
        <section>
          { photographersListAll.map((item, index) =>
            <p key={`key${index * 3}`}> { item[keys[index]][language]['name'] } </p>
          ) }
        </section>
      )
    }
    return (
      <p>loading...</p>
    )
  }
}

export default Photographers;