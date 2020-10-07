import React, {Component} from "react";
import {connect} from 'react-redux';
import Order from '../../components/Order/Order';
import Spinner from '../../components/Common/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as orderAction from '../../store/order/orderAction';

class Orders extends Component {

    render() {
        if (this.props.loading) {
            return <Spinner/>
        }
        return (
            <div>
                {this.props.orders.map(order => <Order {...order}/>)}
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchOrders();
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(orderAction.fetchOrders()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));