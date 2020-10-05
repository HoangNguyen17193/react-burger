import React from "react";
import classes from './Order.module.scss';

const order = (props) => {
    const ingredients = Object.entries(props.ingredients)
        .map(([key, value]) => ({name: key, amount: value}))
        .map(ingredient => <span className={classes.Ingredient} key={ingredient.name}>{ingredient.name} ({ingredient.amount})</span>);
    return (<div className={classes.Order}>
        <p>Ingredients: {ingredients}</p>
        <p>Price: <strong>USD {props.price}</strong></p>
    </div>)
}
;

export default order;