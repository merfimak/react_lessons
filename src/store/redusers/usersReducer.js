import { createStore } from 'redux';


const ACTION_ARRIVED = 'ACTION_ARRIVED'



let initialState = {

      arrived: false,
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_ARRIVED:{
				return {//делаем глубинную копию

			        ...state, arrived: true
			 }
			 }

	default:
    	return state;
	}
}





export const actionArrived =  () =>{
 return(
    {type: ACTION_ARRIVED}
)
}



