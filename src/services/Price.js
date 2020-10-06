
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const BASE_PRICE = 4.0;

export {
    INGREDIENT_PRICES,
    BASE_PRICE
}

export default class Price {
    static calculateTotalPrice(ingredients) {
        const ingredientsPrice = Object.entries(ingredients)
            .map(([key, value]) => INGREDIENT_PRICES[key] * (value || 0))
            .reduce((sum, price) => sum + price, 0);
        return (BASE_PRICE + ingredientsPrice).toFixed(2);
    }
}