import React from 'react';
import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import Color_Change from './components/color_change/Color_Change';
import Users from './components/users/Users';
import Life from './components/life/Life';
import Dimensions from './components/dimensions/Dimensions';
import Dimensions_withHuck from './components/dimensions/Dimensions_withHuck';
import Game from './components/game/Game';
import classes from './app.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const users = [
    {
        age: 21,
        name: 'Bob',
        id: 'id-0',
    },
    {
        age: 17,
        name: 'Tom',
        id: 'id-1',
    },
    {
        age: 18,
        name: 'Tad',
        id: 'id-2',
    },
    {
        age: 45,
        name: 'Sam',
        id: 'id-3',
    }
];


function App() {
  return (
       <Router>
         <div className={classes.app_container}>
         <Header />
          <Route exact path="/">
             <Counter interval ={1000} / >
             <Color_Change / >
             <Users users={users} / >
             <Life / >
             <Dimensions / >
             <Dimensions_withHuck / >
          </Route>

          <Route path="/game">
            <Game />
          </Route>
           
        </div>
     </Router>
  );
}

export default App;
