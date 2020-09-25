import React from "react";
import Aux from '../../../hoc/Aux';

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
            <p>Continue to Checkout?</p>
        </Aux>
    )
};

export default orderSummary;