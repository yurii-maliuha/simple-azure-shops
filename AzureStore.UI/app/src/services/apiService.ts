import { report } from 'process';
import { API_URLS } from '../constants/api';
import mockCatalog from '../mocks/catalog.json';
import { SimpleSearchFilter } from '../models/SimpleSearchFilter';

export default class ApiService {
    public static GetAllCommodities() {
        return fetch(API_URLS.GET_ALL_COMMODITIES)
            .then(response => response.json());
    }

    public static GetCommodityCategories() {
        return fetch(API_URLS.GET_COMMODITY_CATEGORIES)
            .then(response => response.json());
    }

    public static GetCommodityById(id: number) {
        return fetch(API_URLS.GET_COMMODITY_BY_ID.replace("{id}", id.toString()))
            .then(response => response.json());
    }

    public static FilterCommodities(filter: SimpleSearchFilter) {
        return fetch(API_URLS.SEARCH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: "POST",
            body: JSON.stringify(filter)
        })
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