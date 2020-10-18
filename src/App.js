import React from 'react';
import Home from "./park-app/body/home"
import Events from "./park-app/body/Events/Events"
import Parks from "./park-app/body/Parks/Parks"
import './App.css';
import { BrowserRouter, Route, HashRouter } from "react-router-dom"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HashRouter>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/events" component={Events} exact={true}></Route>
          <Route path="/parks" component={Parks}></Route>
        </HashRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;


