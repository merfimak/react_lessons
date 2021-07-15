
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

	  <h1  className={classes.title}>это Header</h1>
		<ul className={classes.menu}>
          <li className={classes.menu_link}>
            <Link to=""> 🏠Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
					
	 </div>
	 )
}



export default Header;