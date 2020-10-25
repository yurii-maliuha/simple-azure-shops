import { SimpleSearchFilter } from '../../models/SimpleSearchFilter';
import ApiService from '../../services/apiService';

export const GET_CATALOG_REQUEST = "GET_CATALOG_REQUEST";
export const GET_CATALOG_SUCCESS = "GET_CATALOG_SUCCESS";
export const GET_CATALOG_ERROR = "GET_CATALOG_ERROR";
export const SELECT_ITEM = "SELECT_ITEM";

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

export const selectItemAction = (item: any) => {
    return {
        type: SELECT_ITEM,
        selectedItem: item
    };
}

export const selectItemActionCreator = (item: any) => {
    return (dispatch: any) => {
        dispatch(selectItemAction(item)); 
    }
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

export const filterCatalogItems = (filter: SimpleSearchFilter) => {
    return (dispatch: any) => {
        dispatch(getCatalogItemsRequest());
        return ApiService.FilterCommodities(filter)
            .then((result) => {
                dispatch(getCatalogItemsSuccess(result));
            });
        }
    }