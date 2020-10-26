
import ApiService from '../../services/apiService';

export const ORDER_CREATION_REQUEST = "ORDER_CREATION_REQUEST";
export const ORDER_CREATION_CANCEL = "ORDER_CREATION_CANCEL";
export const ORDER_CREATION_SUBMIT_REQUEST = "ORDER_CREATION_SUBMIT_REQUEST";
export const ORDER_CREATION_SUBMIT_SUCCESS = "ORDER_CREATION_SUBMIT_SUCCESS";


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




export const submitOrderCreation = (order: any) => {
    return (dispatch: any) => {
        dispatch(orderCreationSubmitRequest(order));
        return ApiService.SubmitOrder(order) 
            .then((result) => {
                dispatch(orderCreationSubmitSuccess(result));
            });
    }
}



