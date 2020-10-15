import React from 'react';
import Home from "./park-app/body/home"
import Events from "./park-app/body/Events/Events"

import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"


const App = () => {
  return (
   <div className="App">
     <BrowserRouter basename={process.env.PUBLIC_URL}>
<Switch>
<Route path="/" component={Home} exact={true}></Route>
<Route path="/events" component={Events}></Route>
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;


