import { API_URLS } from '../constants/api';
import mockCatalog from '../mocks/catalog.json';

export default class ApiService {
    public static GetAllCommodities() {
        debugger;
        return fetch(API_URLS.GET_ALL_COMMODITIES)
            .then(response => response.json());
    }
}