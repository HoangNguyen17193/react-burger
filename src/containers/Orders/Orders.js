import React, {Component} from "react";
import Order from '../../components/Order/Order';
import Spinner from '../../components/Common/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get('/orders.json')
            .then((response) => {
                this.setState({
                    orders: Object.entries(response.data).map(([key, value]) => ({key, ...value}))
                });
            })
            .catch(e => console.log(e))
            .finally(() => {
            this.setState({
                loading: false
            })
        });
    }

    render() {
        if(this.state.loading) {
            return <Spinner/>
        }
        return (
            <div>
                {this.state.orders.map(order => <Order {...order}/>)}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);