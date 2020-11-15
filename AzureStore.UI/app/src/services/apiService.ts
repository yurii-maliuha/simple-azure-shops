import { METHODS } from 'http';
import { API_URLS } from '../constants/api';
import Commodity from '../models/Commodity';
import { SimpleSearchFilter } from '../models/SimpleSearchFilter';

export default class ApiService {
    public static GetAllCommodities(page: number) {
        return fetch(API_URLS.PRODUCTS.GET_ALL_COMMODITIES.concat(`?page=${page.toString()}`))
            .then(response => response.json());
    }

    public static GetCommodityCategories() {
        return fetch(API_URLS.PRODUCTS.GET_COMMODITY_CATEGORIES)
            .then(response => response.json());
    }

    public static GetCommodityById(id: number) {
        return fetch(API_URLS.PRODUCTS.GET_COMMODITY_BY_ID.replace("{id}", id.toString()))
            .then(response => response.json());
    }

    public static FilterCommodities(filter: SimpleSearchFilter) {
        return fetch(API_URLS.PRODUCTS.SEARCH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: "POST",
            body: JSON.stringify(filter)
        })
            .then(response => response.json());
    }

    public static UpdateProduct(product: Commodity) {
        return fetch(API_URLS.PRODUCTS.UPDATE_PRODUCT, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json());
    }

    public static SubmitOrder(order: any) {
        return fetch(API_URLS.ORDERS.POST_ORDER, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}