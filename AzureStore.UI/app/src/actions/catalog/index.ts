import ApiService from '../../services/apiService';

export const GET_CATALOG_REQUEST = "GET_CATALOG_REQUEST";
export const GET_CATALOG_SUCCESS = "GET_CATALOG_SUCCESS";
export const GET_CATALOG_ERROR = "GET_CATALOG_ERROR";

export const getCatalogItemsRequest = () => {
    return {
        type: GET_CATALOG_REQUEST
    };
}

export const getCatalogItemsSuccess = (payload: any) => {
    return {
        type: GET_CATALOG_SUCCESS,
        payload
    };
}

export const getCatalogItems = () => {
    return (dispatch: any) => {
        dispatch(getCatalogItemsRequest());
        return ApiService.GetAllCommodities()
            .then((result) => {
                dispatch(getCatalogItemsSuccess(result));
            });
    }
}