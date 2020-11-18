import { connect } from 'react-redux';
import { savePaymentModel } from '../actions/ordering'
import PayPal from '../components/Payments/PayPalForm';
import SavePaymentModel from '../models/SavePaymentModel';

const mapStateToProps = (state: any) => {
    return {
        order: state.orders.createdOrder,
        paymentSavedStatus: state.orders.paymentSavedStatus
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        savePayment: (paymentModel: SavePaymentModel) => dispatch(savePaymentModel(paymentModel))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PayPal);