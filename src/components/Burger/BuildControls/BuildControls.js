import React from "react";
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad', type: 'salad'
    },
    {
        label: 'Bacon', type: 'bacon'
    },
    {
        label: 'Cheese', type: 'cheese'
    },
    {
        label: 'Meat', type: 'meat'
    }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                type={control.type}
                added={() => props.addIngredientHandler(control.type)}
                removed={() => props.removeIngredientHandler(control.type)}
                disabled={props.disabled[control.type]}/>
        ))}
    </div>
);

export default buildControls;