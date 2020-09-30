import { API_URLS } from '../constants/api';
import mockCatalog from '../mocks/catalog.json';

export default class ApiService {
    public static GetAllCommodities() {
        return Promise.resolve(mockCatalog);
    }
}