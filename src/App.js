import React from 'react';
import Home from "./park-app/body/home"
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"

const App = () => {
  return (
   <div className="App">
     <BrowserRouter>
<Switch>
<Route path="/Home" component={Home} exact={true}> 
</Route>
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
/*

*/