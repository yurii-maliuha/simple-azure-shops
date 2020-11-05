import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { filterCatalogItems, getCatalogItems } from "../actions/catalog";
import Catalog from "../components/Catalog";
import { SimpleSearchFilter } from "../models/SimpleSearchFilter";

const mapStateToProps = (state: any, ownProps: any) => {
	return {
		catalogItems: state.catalog.catalogItems,
		catalogLoading: state.catalog.catalogLoading,
		category: state.categories.current,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getCatalog: (page: number) => dispatch(getCatalogItems(page)),
		filterCatalog: (filter: SimpleSearchFilter) =>
			dispatch(filterCatalogItems(filter)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter<any, any>(Catalog));
