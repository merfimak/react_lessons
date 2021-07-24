
import classes from './users.module.css';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {actionArrived} from '../../store/redusers/usersReducer.js'


const Users = (props) => {

let [count, setCount] = useState(0);

console.log(props)

const arrivedClick = () =>{
	props.onChangeArrived()
}

	  return (
	  <div className={classes.users_component}>

	  <h1  className={classes.title}>это Users</h1>
		{props.users.map(elem => {
			return <div className={classes.user} key={elem.id}>имя - {elem.name}</div>
		}
				 
		)}
			
		<div><button onClick={() => arrivedClick() } className={classes.btn}>сюда</button></div>

		<div>{ props.arrived ? 'pron' : 'nepron'}</div>

	 </div>
	 )
}



let mapStateToProps = (state) =>{
	return{
		arrived: state.users.arrived

	}
}


let mapDispatchToProps = (dispatch) =>{
	return{
	onChangeArrived:  () => {
			dispatch(actionArrived());
		}

		
	}
}

	 const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

	export default UsersContainer;