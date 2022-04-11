import React from 'react'
import './Card.css'

const Card = (props) => {
  console.log(props);

  
    // const classes = 'card ' + props.className;
    const classes = 'card ' + props.className; 
return (
    <div>
            <div className={classes}>{props.children}</div>
    </div>
  )
}

export default Card;
