import React from 'react';
import Home from "./park-app/body/home"
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"

const App = () => {
  return (
   <div className="App">
     <BrowserRouter>
     <h1>I love this job</h1>
<Switch>
<Route path="/" component={Home} exact={true}> 
</Route>
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
/*

*/