import { GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS, SELECT_ITEM, UNSELECT_ITEM, DELETE_ITEM, RESET_ITEMS } from '../actions/catalog';
import OrderItem from '../models/OrderItem';
import Action from '../models/Action';

const initialState = {
    catalogLoading: false,
    catalogItems: {
        data: [],
        totalPages: 1
    },
    selectedItems: new Map<number, OrderItem>()
};


export function catalog(state: any = initialState, action: Action) {
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
            const productId = action.payload.id;
            let itemsMap = new Map<number, OrderItem>(state.selectedItems);
            const item = itemsMap.get(productId);
            if(item) {
                itemsMap.set(productId, {product: item.product, quantity: item.quantity + 1});
            } else {
                itemsMap.set(
                    productId, 
                    {
                        product: action.payload, 
                        quantity: 1
                    }
                );
            }

            return {
                ...state,
                selectedItems: itemsMap
            };
        };
        case UNSELECT_ITEM: {
            const productId = action.payload.id;
            let itemsMap = new Map<number, OrderItem>(state.selectedItems);
            const item = itemsMap.get(productId);
            if(item && item.quantity > 1) {
                itemsMap.set(productId, {product: item.product, quantity: item.quantity - 1});
            } else if (item) {
                itemsMap.delete(productId);
            }

            return {
                ...state,
                selectedItems: itemsMap
            };
        };
        case DELETE_ITEM: {
            const productId = action.payload;
            let itemsMap = new Map<number, OrderItem>(state.selectedItems);
            if(itemsMap.has(productId)) {
                itemsMap.delete(productId);
            }

            return {
                ...state,
                selectedItems: itemsMap
            };
        }
        case RESET_ITEMS: {
            return {
                ...state,
                selectedItems: []
            }
        }

        default: {
            return state;
        }
    }
}