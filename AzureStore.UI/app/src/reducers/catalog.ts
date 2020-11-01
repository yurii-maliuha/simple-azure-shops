import { stat } from 'fs';
import { GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS, SELECT_ITEM } from '../actions/catalog';
import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from '../actions/categories';

const item = {prodcut: {id: 0, amount:0, name: ""}, quantity: 0};
const initialState = {
    catalogLoading: false,
    catalogItems: {
        data: [],
        totalPages: 1
    },
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
            const index = state.selectedItems.findIndex((x: any) => x.product.id === action.selectedItem.id);
            let items = [];
            if(index >= 0) {
                items = [...state.selectedItems];
                items.splice(index, 1, {
                    product: state.selectedItems[index].product,
                    quantity: state.selectedItems[index].quantity + 1
                });
            } else {
                items = [...state.selectedItems, {product: action.selectedItem, quantity: 1}];
            }

            return {
                ...state,
                selectedItems: items
            };
        };
        default: {
            return state;
        }
    }
}