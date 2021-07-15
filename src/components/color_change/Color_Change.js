
import classes from './Color_Change.module.css';
import React, {useState} from 'react';


const Color_Change = (props) => {

let [color, setColor] = useState(classes.color_div_border);


const actionColor_Change= (e) => {
	//console.log(e.target.dataset.color)
	setColor(e.target.dataset.color)
}




	  return (
	  <div>

	  <h1  className={classes.title}>это Color_Change</h1>


	    <div className={classes.test_div  + ' ' + color}>test_div</div>
	    


<button onClick={actionColor_Change} data-color={classes.color_green} className={classes.btn_green}>btn_green</button>
<button onClick={actionColor_Change} data-color={classes.color_pink} className={classes.btn_pink}>btn_pink</button>
<button onClick={actionColor_Change} data-color={classes.color_yellow} className={classes.btn_yellow}>btn_yellow</button>


	  </div>



	  	);
}



export default Color_Change;