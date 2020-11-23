import { PaymentSaveStatus } from "./PaymentSaveStatus";

export default interface SavePaymentModel {
    orderId: string;
    transactionId: string;
    created: Date;
    amount: number;
    currency: string;
    provider: string;
    statusId: PaymentSaveStatus;
}