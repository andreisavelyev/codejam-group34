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
      searchedPhotoghrapher: '',
      input: '',
      homeTranslations: [],
      homeIsLoaded: '',
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
    this.setState({
      language: e.target.textContent,
    });
  }

  onChangeInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const { input, photographersListAll } = this.state;
    photographersListAll.map((item) => {
      const key = Object.keys(item).toString();
      if (key.includes(input.toLowerCase())) {
        this.setState({
          searchedPhotoghrapher: item[key],
        });
      }
      return false;
    });
  }

  onGetTranslations() {
    fetch('home-data.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ homeTranslations: data, homeIsLoaded: true });
      });
  }
}

export default Store;
