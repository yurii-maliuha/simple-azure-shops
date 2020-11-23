import { ORDER_CREATION_SUBMIT_REQUEST, ORDER_CREATION_SUBMIT_SUCCESS, PAYMENT_SAVED_STATUS } from '../actions/ordering';
import { PaymentSaveStatus } from '../models/PaymentSaveStatus';
const initialState = {
    orderPending: false,
    createdOrder: null,
    paymentSavedStatus: PaymentSaveStatus.NotExecuted
};

export function orders(state: any = initialState, action: any) {
    switch (action?.type) {
        case ORDER_CREATION_SUBMIT_REQUEST: {
            return {
                ...state,
                orderPending: true
            };
        };
        case ORDER_CREATION_SUBMIT_SUCCESS: {
            return {
                ...state,
                orderPending: false,
                createdOrder: action.payload
            };
        };
        case PAYMENT_SAVED_STATUS: {
            return {
                ...state,
                paymentSavedStatus: action.payload
            };
        };
        default: {
            return state;
        }
    }
}