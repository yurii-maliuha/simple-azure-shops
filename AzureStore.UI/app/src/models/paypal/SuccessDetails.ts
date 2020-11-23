export default interface SuccessDetails {
	create_time: Date;
	update_time: Date;
	id: string;
	payer: PaypalPayer;
	purchase_units: PurchaseUnit[];
	shipping: ShippingInfo;
	status: string;
}

export interface PaypalPayer {
	address: {
		country_code: string;
	};
	email_address: string;
	name: {
		given_name: string;
		surname: string;
	};
	payer_id: string;
}

export interface PurchaseUnit {
	amount: {
		value: string;
		currency_code: string;
	};
	payee: {
		email_address: string;
		merchant_id: string;
	};
	payments: {
		captures:[{
			id: string
		}]
	}
}

export interface ShippingInfo {
	address: {
		address_line_1: string;
		admin_area_2: string;
		admin_area_1: string;
		postal_code: string;
		country_code: string;
	};
}
