import { ORDER_CREATION_SUBMIT_REQUEST, ORDER_CREATION_SUBMIT_SUCCESS } from '../actions/ordering';
const initialState = {
    orderPending: false,
    selectedItems: []
};

export function orders(state: any = initialState, action: any) {
    switch (action?.type) {
        case ORDER_CREATION_SUBMIT_REQUEST: {
            return {
                ...state,
                orderPending: true,
                selectedItems: action.payload
            };
        };
        case ORDER_CREATION_SUBMIT_SUCCESS: {
            return {
                ...state,
                orderPending: false,
                selectedItems: []
            };
        };
        default: {
            return state;
        }
    }
}