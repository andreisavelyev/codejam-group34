import Reflux from 'reflux';

import actions from './actions';

class Store extends Reflux.Store {
  constructor(props) {
    super(props);
    this.state = {
      photographersListAll: [],
    };

    this.listenables = actions;
  }
}

export default Store;
