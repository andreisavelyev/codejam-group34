import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Reflux from 'reflux';
import actions from '../actions';
import Store from '../Store';
import '../css/App.css';

import Header from './Header';
import Home from './Home';
import PhotographerList from './PhotographerList';
import PhotographerInfo from './PhotographerInfo';

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
    this.storeKeys = ['language'];
  }

  render() {
    // console.log(actions.changeLanguage)
    return (
      <BrowserRouter>
        <div>
          <Header onChangeLanguage={actions.changeLanguage} />
          <main className='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/photographers' component={PhotographerList} />
              <Route path='/photographers/:photographer' component={PhotographerInfo} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
