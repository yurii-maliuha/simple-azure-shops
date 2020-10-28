import ApiService from '../../services/apiService';

export const PRODUCT_REQUEST_START = "PRODUCT_REQUEST_START";
export const PRODUCT_REQUEST_SUCCESS = "PRODUCT_REQUEST_SUCCESS";
export const PRODUCT_REQUEST_FAILED = "PRODUCT_REQUEST_FAILED";

export const getProductRequest = (payload: any) => {
    return {
        type: PRODUCT_REQUEST_START,
        payload
    };
}

export const getProductSuccess = (payload: any) => {
    return {
        type: PRODUCT_REQUEST_SUCCESS,
        payload
    };
}

export const getProduct = (id: number) => {
    return (dispatch: any) => {
        dispatch(getProductRequest(id));
        return ApiService.GetCommodityById(id)
            .then((result) => {
                dispatch(getProductSuccess(result));
            });
    }
}