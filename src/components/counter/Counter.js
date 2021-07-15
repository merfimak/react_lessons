
import classes from './counter.module.css';
import React, {useState, useEffect} from 'react';


const Counter = (props) => {

let [count, setCount] = useState(0);

const actionCount= () => {
	setCount(count + 1)
}

let a = 10;




/*setInterval(() => {    
     setCount(count + 1);
    }, props.interval);*/

	  return (
	  <div>

	  <h1  className={classes.title}>это B</h1>


	    <div>{count}</div>
	    <div>{count * a}</div>


<button onClick={actionCount} className={classes.btn}>Button</button>


	  </div>



	  	);
}



export default Counter;