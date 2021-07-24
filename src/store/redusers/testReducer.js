import { createStore } from 'redux';


const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME'
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME'



let initialState = {
      firstName: 'Вася',
      secondName: 'Пупкин',
}

export const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_CHANGE_FIRST_NAME:{
			//console.log(action)
				return {//делаем глубинную копию

			        ...state, firstName: action.payload
			 }
			 }

case ACTION_CHANGE_SECOND_NAME:{
				return {//делаем глубинную копию
			        ...state, secondName: action.payload
			 }
			 }

	default:
    	return state;
	}
}


////////////////////////////////////////////////////////////////////////////////

/*export const testTwoReducer = (state = initialState, action) => {

 	return state;
	}*/

////////////////////////////////////////////////////////////////////////////////

/*export const store = createStore(testReducer)*/



export const actionChangeFifstName =  (newFifstName) =>{
 return(
    {type: ACTION_CHANGE_FIRST_NAME,
        payload: newFifstName,}
)
}


export const actionChangeSecondName = (newSecondName) => {
  return(
   { type: ACTION_CHANGE_SECOND_NAME,
       payload: newSecondName,}
)
}