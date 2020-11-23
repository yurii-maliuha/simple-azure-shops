
import { PaymentSaveStatus } from '../../models/PaymentSaveStatus';
import SavePaymentModel from '../../models/SavePaymentModel';
import ApiService from '../../services/apiService';

export const ORDER_CREATION_REQUEST = "ORDER_CREATION_REQUEST";
export const ORDER_CREATION_CANCEL = "ORDER_CREATION_CANCEL";
export const ORDER_CREATION_SUBMIT_REQUEST = "ORDER_CREATION_SUBMIT_REQUEST";
export const ORDER_CREATION_SUBMIT_SUCCESS = "ORDER_CREATION_SUBMIT_SUCCESS";
export const PAYMENT_SAVED_STATUS = "PAYMENT_SAVED_STATUS";


export const orderCreationSubmitRequest = (payload: any) => {
    return {
        type: ORDER_CREATION_SUBMIT_REQUEST,
        payload
    };
}

export const orderCreationSubmitSuccess = (payload: any) => {
    return {
        type: ORDER_CREATION_SUBMIT_SUCCESS,
        payload
    };
}

export const paymentSavedWithStatus = (payload: PaymentSaveStatus) => {
    return {
        type: PAYMENT_SAVED_STATUS,
        payload
    }
}




export const submitOrderCreation = (order: any) => {
    return (dispatch: any) => {
        dispatch(orderCreationSubmitRequest(order));
        return ApiService.SubmitOrder(order) 
            .then((result) => {
                dispatch(orderCreationSubmitSuccess(result));
            });
    }
}

export const savePaymentModel = (paymentModel: SavePaymentModel) => {
    return (dispatch: any) => {
        return ApiService.SavePayment(paymentModel)
            .then(
                (result) => {
                    dispatch(paymentSavedWithStatus(PaymentSaveStatus.Successful));
                },
                (error) => {
                    dispatch(paymentSavedWithStatus(PaymentSaveStatus.Failed));
                }
            );
    }
}



