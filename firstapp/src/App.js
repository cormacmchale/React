//Main React Library
import React from 'react';
//css
import './App.css';
import Game from './Game';
import Home from './Home';

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
        <Route path="/game" component={Game} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
