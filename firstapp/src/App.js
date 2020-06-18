//Main React Library
import React from 'react';
//css
import './App.css';

//page, functionality imports
import Game from './Game';
import Home from './Home';
import Canvas from './Canvas';

//router and toolbar (Naviagation and website skeleton)
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyToolbar from './Toolbar';

function App() {
  return (
    <div>
      <MyToolbar></MyToolbar>
      <div className="centerView">
      <Router> 
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/game" exact component={Game} />
        <Route path="/draw" exact component={Canvas} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
