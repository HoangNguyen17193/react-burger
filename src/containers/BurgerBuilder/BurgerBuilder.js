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
import * as ActionTypes from '../../store/actions';


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasing: false,
            loading: false,
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
        const queryParams = Object.entries(this.props.ingredients)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryParams}`
        });

    };

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({
        //             ingredients: response.data,
        //             totalPrice: Price.calculateTotalPrice(response.data)
        //         })
        //     })
    }


    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        const totalIngredients = Object.values(this.props.ingredients).reduce((total, ingredientQuantity) => total + ingredientQuantity, 0);

        const orderSummary = (this.state.loading || !this.props.ingredients)
            ? <Spinner />
            : <OrderSummary
                ingredients={this.props.ingredients}
                cancelOrder={this.purchaseCancelHandler}
                continueOrder={this.purchaseContinueHandler}
                price={this.props.totalPrice}
            />;

        const burger = this.props.ingredients
            ? <Aux>
                <Burger ingredients = {this.props.ingredients}/>
                <BuildControls
                    totalPrice={this.props.totalPrice}
                    disabled={disabledInfo}
                    addIngredientHandler={this.props.onIngredientAdded}
                    removeIngredientHandler={this.props.onIngredientRemoved}
                    purchasable={totalIngredients > 0}
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
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch({type: ActionTypes.ADD_INGREDIENT, ingredientName}),
        onIngredientRemoved: (ingredientName) => dispatch({type: ActionTypes.REMOVE_INGREDIENT, ingredientName}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));