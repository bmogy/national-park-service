import React from 'react';
import Home from "./park-app/body/home"
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"

const App = () => {
  return (
   <div className="App">
     <BrowserRouter>
<Switch>
<Route path="https://bmogy.github.io/national-park-service/home" component={Home} exact={true}> 
</Route>
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
/*

*/