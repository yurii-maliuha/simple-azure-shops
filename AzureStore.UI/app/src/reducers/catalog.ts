import { GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS, SELECT_ITEM } from '../actions/catalog';
import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from '../actions/categories';

const initialState = {
    catalogLoading: false,
    catalogItems: [],
    selectedItems: []
};

export function catalog(state: any = initialState, action: any) {
    switch (action?.type) {
        case GET_CATALOG_REQUEST: {
            return {
                ...state,
                catalogLoading: true
            }
        };
        case GET_CATALOG_SUCCESS: {
            return {
                ...state,
                catalogLoading: false,
                catalogItems: action.payload
            }
        };
        case SELECT_ITEM: {
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.selectedItem]
            }                  
        };
        default: {
            return state;
        }
    }
}