import React from 'react';
import styles from './Burger.module.scss';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const { ingredients } = props;
    const burgerIngredients = Object.entries(ingredients).map(([key, value], index) => {
        return [...Array(value)].map((element, index) => <BurgerIngredient type={key} key={key + index} /> )
    }).flatMap(burgerIngredient => burgerIngredient);
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;