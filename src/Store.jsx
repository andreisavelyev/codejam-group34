import Reflux from 'reflux';

import actions from './actions';

class Store extends Reflux.Store {
  constructor(props) {
    super(props);
    this.state = {
      photographersListAll: [],
      isLoaded: '',
      keys: [],
      language: 'bel',
    };
    this.listenables = actions;
  }

  onGetData() {
    fetch('data.json')
      .then(res => res.json())
      .then((data) => {
        const keys = data.map(Object.keys).flat();
        this.setState({ photographersListAll: data, keys, isLoaded: true });
      });
  }

  onGetDataFromRouter() {
    fetch('../data.json')
      .then(res => res.json())
      .then((data) => {
        const keys = data.map(Object.keys).flat();
        this.setState({ photographersListAll: data, keys, isLoaded: true });
      });
  }

  onChangeLanguage(e) {
    console.log('clicked')
    this.setState({
      language: e.target.textContent,
    });
  }
}

export default Store;
