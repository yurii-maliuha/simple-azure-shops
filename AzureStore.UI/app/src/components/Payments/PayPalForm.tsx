import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Order from "../../models/Order";

interface Props {
	order: Order;
}

export default class PayPal extends React.Component<Props> {
	onSuccess = (details: any, data: any) => {
		console.log(details);
		console.log(data);
	};

	render() {
		const { order } = this.props;
		return (
			<PayPalButton
				amount={order.price}
				currency={"USD"}
				onSuccess={(details: any, data: any) => this.onSuccess(details, data)}
				options={{
					clientId: "client_id",
				}}
			/>
		);
	}
}
