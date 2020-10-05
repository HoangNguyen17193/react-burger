import React, {Component}  from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Common/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Common/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Price from "../../services/Price";
import axios from '../../axios-orders';


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 0,
            purchasable: false,
            purchasing: false,
            loading: false,
        }
    }

    updatePurchaseState(ingredients) {
        const sum = Object.values(ingredients).reduce((total, ingredientQuantity) => total + ingredientQuantity, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCont = this.state.ingredients[type];
        const updatedCount = oldCont + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({
            totalPrice: Price.calculateTotalPrice(updatedIngredients),
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCont = this.state.ingredients[type];
        if(oldCont <= -0) {
            return;
        }
        const updatedCount = oldCont - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({
            totalPrice: Price.calculateTotalPrice(updatedIngredients),
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    };

    purchaseContinueHandler = async () => {
        const queryParams = Object.entries(this.state.ingredients)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryParams}`
        });

    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data,
                    totalPrice: Price.calculateTotalPrice(response.data)
                })
            })
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        const orderSummary = (this.state.loading || !this.state.ingredients)
            ? <Spinner />
            : <OrderSummary
                ingredients={this.state.ingredients}
                cancelOrder={this.purchaseCancelHandler}
                continueOrder={this.purchaseContinueHandler}
                price={this.state.totalPrice}
            />;

        const burger = this.state.ingredients
            ? <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    disabled={disabledInfo}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
            : <Spinner />;
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);