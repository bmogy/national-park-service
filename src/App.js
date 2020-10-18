import React from 'react';
import Home from "./park-app/body/home"
import Events from "./park-app/body/Events/Events"
import Parks from "./park-app/body/Parks/Parks"
import './App.css';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom"


const App = () => {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/events" component={Events} exact={true}></Route>
          <Route path="/parks" component={Parks}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;


