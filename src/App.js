import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Id from './components/Id';
import IdColor from './components/IdColor';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <h1>Routing Practice</h1>
          <hr />

          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/:id'>
              <Id></Id>  
            </Route>
            <Route exact path='/:id/:color1/:color2'>
              <IdColor></IdColor>
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    
  );
}

export default App;
