import { connect } from 'react-redux';
import { submitOrderCreation } from '../actions/ordering'
import OrderForm from '../components/OrderForm';

const mapStateToProps = (state: any) => {
    return {
        selectedItems: state.selectedItems
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitOrder: (order: any) => dispatch(submitOrderCreation(order))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
