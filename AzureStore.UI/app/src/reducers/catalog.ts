import { GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS } from '../actions';

const initialState = {
    catalogLoading: false,
    catalogItems: []
};

export function catalog (state: any = initialState, action: any) {
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
        default: {
            return state;
        }
    }
}