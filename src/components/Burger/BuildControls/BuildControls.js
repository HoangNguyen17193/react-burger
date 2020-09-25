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
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                type={control.type}
                added={() => props.addIngredientHandler(control.type)}
                removed={() => props.removeIngredientHandler(control.type)}
                disabled={props.disabled[control.type]}/>
        ))}
        <button disabled={!props.purchasable}
                onClick={() => props.ordered()}
                className={classes.OrderButton}>ORDER NOW
        </button>
    </div>
);

export default buildControls;