import  React from 'react';
import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import Color_Change from './components/color_change/Color_Change';
import UsersContainer from './components/users/Users';
import Life from './components/life/Life';
import ReducerTestPageContainer from './components/reducerTestPage/ReducerTestPage';
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
//import {store} from './store/redusers/testReducer.js';
import store from './store/store.js';
//import {StoreContext} from './context/StoreContext.js'
import { Provider } from 'react-redux';



console.log(store)
//console.log(ReducerTestPageContainer)

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
  //console.log(store)
  return (
    <Provider store={store}>
       <Router>
         <div className={classes.app_container}>
         <Header />
          <Route exact path="/">
             <Counter interval ={1000} / >
             <Color_Change / >
             <UsersContainer users={users} / >
             <Life / >
             <Dimensions / >
             <Dimensions_withHuck / >
          </Route>

          <Route path="/game">
            <Game />
          </Route>


           <Route path="/ReducerTestPageContainer">
            <ReducerTestPageContainer  />
          </Route>
           
        </div>
     </Router>
     </Provider>
  );
}

export default App;
