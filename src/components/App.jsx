import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../css/App.css';

import Header from './Header';
// import Home from './Home';
// import PhotographerList from './PhotographerList';
// import PhotographerInfo from './PhotographerInfo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className='main'>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            {/* <Route exact path='/photographers' component={PhotographerList} /> */}
            {/* <Route path='/photographers/:photographer' component={PhotographerInfo} /> */}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
