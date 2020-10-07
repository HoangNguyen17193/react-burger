import React, {Component} from "react";
import {connect} from 'react-redux';
import Button from '../../../components/Common/Button/Button';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Price from '../../../services/Price';
import Spinner from '../../../components/Common/Spinner/Spinner';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as orderActions from '../../../store/actions/order';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };
    orderHandler = (event) => {
        event.preventDefault();
        const ingredients = this.props.ingredients;
        const order = {
            ingredients,
            price: Price.calculateTotalPrice(ingredients),
            customer: {
                name: 'Max Schwarzmuller',
                address: {
                    street: '',
                    zipCode: '',
                    country: ''
                }
            },
            email: 'test@test.com'
        };
        this.props.orderBurger(order);
    };
    render() {
        const form = this.props.loading
            ? <Spinner />
            : <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input}  type="text" name="name" placeholder="Your email" />
                <input className={classes.Input}  type="text" name="street" placeholder="Street" />
                <input className={classes.Input}  type="text" name="postalCode" placeholder="Postal Code" />
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        return (
          <div className={classes.ContactData}>
              <h4>Enter your contactData</h4>
              {form}
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        orderBurger: (orderData) => dispatch(orderActions.purchaseBurger(orderData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));