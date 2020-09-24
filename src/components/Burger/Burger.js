import React from 'react';
import styles from './Burger.module.scss';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const { ingredients } = props;
    let burgerIngredients = Object.entries(ingredients).map(([key, value], index) => {
        return [...Array(value)].map((element, index) => <BurgerIngredient type={key} key={key + index} /> )
    }).flatMap(burgerIngredient => burgerIngredient);
    if(burgerIngredients.length === 0) {
        burgerIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;