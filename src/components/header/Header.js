
import classes from './Header.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = (props) => {



	  return (
	  <div>

		<ul className={classes.menu}>
          <li className={classes.menu_link}>
            <Link to=""> 🏠Home</Link>
          </li>
          <li className={classes.menu_link}>
            <Link to="/game">Game</Link>
          </li>
           <li className={classes.menu_link}>
            <Link to="/ReducerTestPageContainer">ReducerTestPageContainer</Link>
          </li>
        </ul>
					
	 </div>
	 )
}



export default Header;