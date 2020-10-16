import ApiService from '../../services/apiService';

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

export const getCategoriesRequest = () => {
    return {
        type: GET_CATEGORIES_REQUEST
    };
}

export const getCategoriesSuccess = (payload: any) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload
    };
}

export const getCategoriesAction = () => {
    console.log('get categories');
    return (dispatch: any) => {
        dispatch(getCategoriesRequest());
        console.log('step 1');
        return ApiService.GetCommodityCategories()
            .then((result) => {
                dispatch(getCategoriesSuccess(result));
            });
    }
}