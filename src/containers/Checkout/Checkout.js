import React, {Component} from "react";
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };
    cancelCheckout = () => {
        this.props.history.goBack();
    };
    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    };

    componentDidMount() {
        const ingredients = {};
        for (let [key, value] of new URLSearchParams(this.props.location.search).entries()) {
            ingredients[key] = parseInt(value) || 0;
        }
        this.setState({
            ingredients: ingredients
        })
    }

    render() {
        return (
          <div>
              <CheckoutSummary
                  ingredients={this.state.ingredients}
                  cancelCheckout={this.cancelCheckout}
                  continueCheckout={this.continueCheckout}/>
                  <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
          </div>
        );
    }
}
    
export default Checkout;