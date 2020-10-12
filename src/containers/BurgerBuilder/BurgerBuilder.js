import React, {Component}  from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Common/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Common/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { addIngredient, removeIngredient, initIngredients } from '../../store/burgerBuilder/burgerBuilderAction';
import { purchaseInit } from '../../store/order/orderAction';


export class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasing: false
        }
    }

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
        this.props.onInitPurchase();
        this.props.history.push({
            pathname: '/checkout'
        });

    };

    componentDidMount() {
        this.props.onInitIngredients();
    }

    isPurchasable(ingredients) {
        return ingredients && Object.values(this.props.ingredients).reduce((total, ingredientQuantity) => total + ingredientQuantity, 0) > 0
    }


    render() {
        if(this.props.error) {
            return 'Ingredients can\'t be load'
        }

        const disabledInfo = {
            ...this.props.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        let orderSummary = null;

        if (this.props.ingredients) {
            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                cancelOrder={this.purchaseCancelHandler}
                continueOrder={this.purchaseContinueHandler}
                price={this.props.totalPrice}
            />;
        }

        const burger = this.props.ingredients
            ? <Aux>
                <Burger ingredients = {this.props.ingredients}/>
                <BuildControls
                    totalPrice={this.props.totalPrice}
                    disabled={disabledInfo}
                    addIngredientHandler={this.props.onIngredientAdded}
                    removeIngredientHandler={this.props.onIngredientRemoved}
                    purchasable={this.isPurchasable(this.props.ingredients)}
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

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(initIngredients()),
        onInitPurchase: () => dispatch(purchaseInit())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));