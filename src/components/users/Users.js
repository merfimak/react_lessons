
import classes from './users.module.css';
import React, {useState, useEffect} from 'react';


const Users = (props) => {

let [count, setCount] = useState(0);

console.log(props.users)

	  return (
	  <div>

	  <h1  className={classes.title}>это Users</h1>
		{props.users.map(elem => {
			return <div key={elem.id}>имя - {elem.name}</div>
		}
				 
		)}
					
	 </div>
	 )
}



export default Users;