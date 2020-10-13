import React from 'react';
import Home from "./park-app/body/home"
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"

const App = () => {
  return (
   <div className="App">
     
<h1>Hello World</h1>

    </div>
  );
}

export default App;
/*
<BrowserRouter>
<Switch>
<Route path="/" component={Home} exact={true}> 
</Route>
</Switch>
</BrowserRouter>
*/