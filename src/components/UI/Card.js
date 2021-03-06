import React from 'react'
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    console.log(props);
    return(
        <div className={classes} key={props.keyName}>{props.children}</div>
    );
}

export default Card;