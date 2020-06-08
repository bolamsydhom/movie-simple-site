import React, { useState } from 'react';

import HomePage from './containers/HomePage';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header'

function App(props) {

  const [currentSearch, setSearch] = useState("");

  const searchQuerey = (event) =>{
    setSearch(event.target.value)    
  }

  if (!localStorage.getItem('results')) {
    localStorage.setItem('results', JSON.stringify({result:[]}));
  }
  
  return (
    <React.Fragment>
        
          <Header searching={searchQuerey}/>
          <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/upcoming Movies/:page?' component={HomePage}></Route>
          <Route path='/Now Playing/:page?' component={HomePage}></Route>
          <Route path='/Top Rated/:page?' component={HomePage}></Route>
          <Route path='/favorites' component={HomePage}></Route>
          < Route path = '/search'
          render = {(props) => <HomePage searchingQuery={currentSearch} {...props}/>
          }></Route>

          </Switch>

    </React.Fragment>
  );
}

export default App;
