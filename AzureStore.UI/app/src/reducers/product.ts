import { PRODUCT_REQUEST_START, PRODUCT_REQUEST_SUCCESS } from '../actions/product'
import Commodity from "../models/Commodity";

const initialState = {
    loading: false,
    commodity: {} as Commodity
};

export function product(state: any = initialState, action: any) {
    switch (action?.type) {
        case PRODUCT_REQUEST_START: {
            return {
                ...state,
                loading: true
            }
        };
        case PRODUCT_REQUEST_SUCCESS: {
            return {
                ...state,
                commodity: action.payload,
                loading: false
            }
        };
        default: {
            return state;
        }
    }
}