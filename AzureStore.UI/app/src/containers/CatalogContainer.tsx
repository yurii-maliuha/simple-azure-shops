import { connect } from 'react-redux';
import { filterCatalogItems, getCatalogItems } from '../actions/catalog'
import Catalog from '../components/Catalog';
import { SimpleSearchFilter } from '../models/SimpleSearchFilter';

const mapStateToProps = (state: any) => {
    return {
        catalogItems: state.catalog.catalogItems
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCatalog: () => dispatch(getCatalogItems()),
        filterCatalog: (filter: SimpleSearchFilter) => dispatch(filterCatalogItems(filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
