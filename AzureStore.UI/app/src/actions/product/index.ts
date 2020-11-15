import Commodity from '../../models/Commodity';
import ApiService from '../../services/apiService';

export const PRODUCT_REQUEST_START = "PRODUCT_REQUEST_START";
export const PRODUCT_REQUEST_SUCCESS = "PRODUCT_REQUEST_SUCCESS";
export const PRODUCT_REQUEST_FAILED = "PRODUCT_REQUEST_FAILED";
export const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST";
export const PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS";

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

export const putProductRequest = (payload: any) => {
    return {
        type: PRODUCT_UPDATE_REQUEST,
        payload
    };
}

export const putProductSuccess = (payload: any) => {
    return {
        type: PRODUCT_UPDATE_SUCCESS,
        payload
    }
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

export const putProduct = (product: Commodity) => {
    return (dispatch: any) => {
        dispatch(putProductRequest(product));
        return ApiService.UpdateProduct(product)
            .then((result) => {
                dispatch(putProductSuccess(result));
            });
    }
}