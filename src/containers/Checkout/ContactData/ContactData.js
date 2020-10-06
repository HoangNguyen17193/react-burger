import React, {Component} from "react";
import {connect} from 'react-redux';
import Button from '../../../components/Common/Button/Button';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Price from '../../../services/Price';
import Spinner from '../../../components/Common/Spinner/Spinner';

class ContactData extends Component {
    state = {
        loading: false,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
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
        axios.post('/orders.json', order)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(e => console.log(e))
            .finally(() => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
    };
    render() {
        const form = this.state.loading
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
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);