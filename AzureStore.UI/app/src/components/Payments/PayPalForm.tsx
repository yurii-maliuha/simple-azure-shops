import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Order from "../../models/Order";
import SuccessData from "../../models/paypal/SuccessData";
import SuccessDetails from "../../models/paypal/SuccessDetails";
import SavePaymentModel from "../../models/SavePaymentModel";
import { PaymentProvidersType } from "../../models/PaymentProvidersType";
import { PaymentSaveStatus } from "../../models/PaymentSaveStatus";
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps  {
	order: Order;
	paymentSavedStatus: PaymentSaveStatus;
	savePayment: (paymentModel: SavePaymentModel) => void;
}

class PayPal extends React.Component<Props> {
	componentDidUpdate(prevProps: Props, prevState: Props) {
		if (prevProps.paymentSavedStatus !== this.props.paymentSavedStatus) {
			this.props.history.push("/payment-status");
		}
	  }

	onSuccess = (details: SuccessDetails, data: SuccessData) => {
		const paymentModel = {
			orderId: this.props.order.id,
			transactionId: details.purchase_units[0].payments.captures[0].id,
			created: details.create_time,
			amount: +details.purchase_units[0].amount.value,
			currency: details.purchase_units[0].amount.currency_code,
			provider: PaymentProvidersType.Paypal,
			statusId: PaymentSaveStatus.Successful
		} as SavePaymentModel;

		this.props.savePayment(paymentModel);
	};

	render() {
		const { order } = this.props;
		return (
			<PayPalButton
				amount={0.01} //{order.total}
				currency={"USD"}
				onSuccess={(details: any, data: any) => this.onSuccess(details, data)}
				options={{
					clientId: "client_id",
				}}
			/>
		);
	}
}

export default withRouter(PayPal);
