
import classes from './counter.module.css';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

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

 <div>{props.firstName + ' ' + props.secondName}</div>
	    <p>{count}</p>
	    <div>{count * a}</div>


<button onClick={actionCount} className={classes.btn}>Button</button>


	  </div>



	  	);
}

let mapStateToProps = (state) =>{
	return{
		firstName: state.test.firstName,
		secondName: state.test.secondName

	}
}


let mapDispatchToProps = (dispatch) =>{
	return{
	
		
	}
}

	 const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default CounterContainer;