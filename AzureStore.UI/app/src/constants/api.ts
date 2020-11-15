export const CATALOG_API_BASE = "https://localhost:44342/api";
export const ORDERING_API_BASE = "https://localhost:44344/api";
export const API_URLS = {
	PRODUCTS: {
		GET_ALL_COMMODITIES: CATALOG_API_BASE + "/products",
		UPDATE_PRODUCT: CATALOG_API_BASE + "/products",
		SEARCH: CATALOG_API_BASE + "/products/search",
		GET_COMMODITY_CATEGORIES: CATALOG_API_BASE + "/categories",
		GET_COMMODITY_BY_ID: CATALOG_API_BASE + "/products/{id}",
	},
	ORDERS: {
		POST_ORDER: ORDERING_API_BASE + "/orders"
	}
};
