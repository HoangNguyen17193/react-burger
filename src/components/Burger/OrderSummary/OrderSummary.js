import React from "react";
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../Common/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.entries(props.ingredients).map(([key, value]) =>
        <li key={key}><span>{key.toUpperCase()}</span>: {value}</li>
    );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType='Danger' clicked={props.cancelOrder}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.continueOrder}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;