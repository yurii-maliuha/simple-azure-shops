import { API_URLS } from '../constants/api';
import mockCatalog from '../mocks/catalog.json';

export default class ApiService {
    public static GetAllCommodities() {
        return fetch(API_URLS.GET_ALL_COMMODITIES)
            .then(response => response.json());
    }

    public static GetCommodityCategories() {
        return fetch(API_URLS.GET_COMMODITY_CATEGORIES)
            .then(response => response.json());
    }

    public static SubmitOrder(order: any) {
        return fetch(API_URLS.POST_ORDER, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}