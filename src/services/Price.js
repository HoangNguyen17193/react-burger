
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const BASE_PRICE = 4;

export {
    INGREDIENT_PRICES,
    BASE_PRICE
}

export default class Price {
    static calculateTotalPrice(ingredients) {
        return BASE_PRICE + Object.entries(ingredients)
            .map(([key, value]) => INGREDIENT_PRICES[key] * (value || 0))
            .reduce((sum, price) => sum + price, 0).toFixed(2);
    }
}