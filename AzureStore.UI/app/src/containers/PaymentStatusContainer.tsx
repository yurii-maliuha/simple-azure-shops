import { connect } from 'react-redux';
import { resetSelectedItems } from '../actions/catalog';
import PaymentStatus from '../components/Payments/PaymentStatus';

const mapStateToProps = (state: any) => {
    return {
        bayer: state.orders.createdOrder && state.orders.createdOrder.userEmail,
        paymentSavedStatus: state.orders.paymentSavedStatus
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        resetSelectedItems: () => dispatch(resetSelectedItems()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStatus);