import Commodity from '../../models/Commodity';
import { SimpleSearchFilter } from '../../models/SimpleSearchFilter';
import ApiService from '../../services/apiService';

export const GET_CATALOG_REQUEST = "GET_CATALOG_REQUEST";
export const GET_CATALOG_SUCCESS = "GET_CATALOG_SUCCESS";
export const GET_CATALOG_ERROR = "GET_CATALOG_ERROR";
export const SELECT_ITEM = "SELECT_ITEM";
export const UNSELECT_ITEM = "UNSELECT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

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

export const onItemSelected  = (item: Commodity) => {
    return {
        type: SELECT_ITEM,
        payload: item
    };
}

export const onItemUnselected = (item: Commodity) => {
    return {
        type: UNSELECT_ITEM,
        payload: item
    }
}

export const onItemDeleted = (id: number) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const selectItem = (item: Commodity) => {
    return (dispatch: any) => {
        dispatch(onItemSelected(item));
    }
}

export const unselectItem = (item: Commodity) => {
    return (dispatch: any) => {
        dispatch(onItemUnselected(item));
    }
}

export const deleteItem = (id: number) => {
    return (dispatch: any) => {
        dispatch(onItemDeleted(id));
    }
}


export const getCatalogItems = (page: number) => {
    return (dispatch: any) => {
        dispatch(getCatalogItemsRequest());
        return ApiService.GetAllCommodities(page)
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