import React from 'react';
import Reflux from 'reflux';
import actions from '../actions';
import Store from '../Store';

class Searchbar extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
    this.storeKeys = ['photographersListAll', 'isLoaded', 'keys', 'language', 'input', 'searchedPhotographer'];
  }

  render() {
    const { language, isLoaded } = this.state;
    
    if (isLoaded) {
      const lastName = language === 'bel' ? 'Прозвішча' : language === 'rus' ? 'Фамилия' : 'Last name';
      const button = language === 'bel' ? 'Шукаць' : language === 'rus' ? 'Искать' : 'Search'; 
      return (
        <form onSubmit={actions.handleSubmit}>
          <input type='text' value={this.state.input} placeholder={lastName} onChange={actions.changeInput} />
          <button type='submit'>{button}</button>
        </form>
      );
    }
    return (
      <p>Loading...</p>
    )
  }
}

export default Searchbar;