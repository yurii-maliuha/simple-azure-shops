import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import OrderItem from '../models/OrderItem';
import { submitOrderCreation } from "../actions/ordering";

const mapStateToProps = (state: any) => {
    return {
        orderItems: Array.from(state.catalog.selectedItems.values()) as OrderItem[]
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitOrder: (order: any) => dispatch(submitOrderCreation(order)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);