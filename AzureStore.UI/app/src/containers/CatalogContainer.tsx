import { connect } from 'react-redux';
import { filterCatalogItems, getCatalogItems, selectItemAction } from '../actions/catalog'
import Catalog from '../components/Catalog';
import { SimpleSearchFilter } from '../models/SimpleSearchFilter';

const mapStateToProps = (state: any) => {
    return {
        catalogItems: state.catalog.catalogItems,
        catalogLoading: state.catalog.catalogLoading
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCatalog: () => dispatch(getCatalogItems()),
        filterCatalog: (filter: SimpleSearchFilter) => dispatch(filterCatalogItems(filter)),
        onItemSelect: (item:any) => dispatch(selectItemAction(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
