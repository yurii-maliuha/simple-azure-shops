import { GET_CATEGORIES_SUCCESS } from '../actions/categories';

const initialState = {
    categories: []
};

export function categories(state: any = initialState, action: any) {
    switch (action?.type) {
        case GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload
            }
        };
        default: {
            return state;
        }
    }
}