import React, {Component} from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    cancelCheckout = () => {
        this.props.history.goBack();
    };
    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    };

    render() {
        if(!this.props.ingredients){
            return <Redirect to="/" />
        }
        return (
          <div>
              <CheckoutSummary
                  ingredients={this.props.ingredients}
                  cancelCheckout={this.cancelCheckout}
                  continueCheckout={this.continueCheckout}/>
                  <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    };
};
    
export default connect(mapStateToProps)(Checkout);