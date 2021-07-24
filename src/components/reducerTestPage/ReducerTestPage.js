import React from 'react';
import {useContext} from 'react';
import ReactDOM from 'react-dom';
import classes from './ReducerTestPage.module.css'
import {StoreContext} from '../../context/StoreContext.js'
import {actionChangeFifstName, actionChangeSecondName} from '../../store/redusers/testReducer.js'
import { connect } from 'react-redux';











function ReducerTestPage(props) {

//const store = useContext(StoreContext);
//console.log(store.initialState)
const state = props.getState;
console.log(props)

let firstNameChang = (firstName) =>{
 props.onChangeFifstName(firstName)
};

let secondNameChang = (firstName) =>{
 props.onChangeSecondName(firstName)
};



return (
		<div>
		<h1 className={classes.title}>ReducerTestPage</h1>

		<div className={classes.inputs} >
			<div><input className={classes.input}
			 name="firstName" type="text"
			  placeholder="First Name"
			   value={props.firstName}
			   onChange={(event) => { firstNameChang(event.target.value)}}
			   /></div>


			<div><input className={classes.input}
			 name="secondName"
			  type="text" placeholder="Second Name"
			    value={props.secondName}
			     onChange={(event) => { secondNameChang(event.target.value)}}
			     /></div>


			    <div>{props.firstName + ' ' + props.secondName}</div>
			    <div>{ props.arrived ? 'pron' : 'nepron'}</div>
		</div>




		</div>
	)

	}


let mapStateToProps = (state) =>{
	return{
		firstName: state.test.firstName,
		secondName: state.test.secondName,
		arrived: state.users.arrived,

	}
}


let mapDispatchToProps = (dispatch) =>{
	return{
		onChangeFifstName:  (newFifstName) => {
			dispatch(actionChangeFifstName(newFifstName));
		},
		onChangeSecondName: (newSecondName) => {
			dispatch(actionChangeSecondName(newSecondName));
		}

		
	}
}

	 const ReducerTestPageContainer = connect(mapStateToProps,mapDispatchToProps)(ReducerTestPage);

	export default ReducerTestPageContainer;