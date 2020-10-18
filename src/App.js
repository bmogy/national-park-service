import React from 'react';
import Home from "./park-app/body/home"
import Events from "./park-app/body/Events/Events"
import Parks from "./park-app/body/Parks/Parks"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="gh-pages-url/" component={Home} exact={true}></Route>
          <Route path="/gh-pages-url/events" component={Events} exact={true}></Route>
          <Route path="gh-pages-url/parks" component={Parks}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


