export const CATALOG_API_BASE = 'https://localhost:44342/api';
export const ORDERING_API_BASE = 'https://localhost:44344/api';
export const PAYMENT_API_BASE = 'https://localhost:44389/api';
export const API_URLS = {
        GET_ALL_COMMODITIES: CATALOG_API_BASE + '/catalog',
        SEARCH: CATALOG_API_BASE + '/catalog/search',
        GET_COMMODITY_CATEGORIES: CATALOG_API_BASE + '/categories',
        POST_ORDER: ORDERING_API_BASE + '/orders',
        GET_COMMODITY_BY_ID: CATALOG_API_BASE + '/catalog/{id}',
        SAVE_PAYMENT: PAYMENT_API_BASE + '/payments'
    }