import React, {Component} from "react";
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
import Price from '../../services/Price';

class Checkout extends Component {
    constructor(props) {
        super(props);
        const ingredients = {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
            totalPrice: 0.0
        };
        this.state = {
            ingredients
        };
    }
    cancelCheckout = () => {
        this.props.history.goBack();
    };
    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    };

    componentWillMount() {
        const ingredients = {};
        for (let [key, value] of new URLSearchParams(this.props.location.search).entries()) {
            ingredients[key] = parseInt(value) || 0;
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: Price.calculateTotalPrice(ingredients)
        })
    }

    render() {
        return (
          <div>
              <CheckoutSummary
                  ingredients={this.state.ingredients}
                  cancelCheckout={this.cancelCheckout}
                  continueCheckout={this.continueCheckout}/>
                  <Route path={this.props.match.path + '/contact-data'} render={(props) => (
                      <ContactData ingredients={this.state.ingredients} {...props}/>
                  )}/>
          </div>
        );
    }
}
    
export default Checkout;