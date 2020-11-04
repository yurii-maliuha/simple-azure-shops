import { GET_CATEGORIES_SUCCESS, SELECT_CATEGORY } from '../actions/categories';

const initialState = {
    categories: [],
    current: undefined
};

export function categories(state: any = initialState, action: any) {
    switch (action?.type) {
        case GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload
            }
        };
        case SELECT_CATEGORY: {
            return {
                ...state,
                current: action.payload
            }
        };
        default: {
            return state;
        }
    }
}