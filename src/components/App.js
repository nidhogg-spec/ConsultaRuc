import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ConsultaRuc from '../pages/ConsultaRuc';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ConsultaRuc" component={ConsultaRuc} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;