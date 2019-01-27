import Reflux from 'reflux';

import actions from './actions';

class Store extends Reflux.Store {
  constructor(props) {
    super(props);
    this.state = {
      photographersListAll: [],
      isLoaded: '',
      keys: [],
    };
    this.listenables = actions;
  }

  onGetData() {
    fetch('data.json')
      .then(res => res.json())
      .then((data) => {
        const keys = data.map(Object.keys).flat();
        console.log(keys)
        this.setState({ photographersListAll: data, keys, isLoaded: true });
      });
  }
}

export default Store;
