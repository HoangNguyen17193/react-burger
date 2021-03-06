import React from "react";
import classes from './Button.module.scss';

const button = (props) => (
    <button className={[classes.Button, classes[props.buttonType]].join(' ')}
            onClick={props.clicked}>{props.children}
    </button>
);

export default button;