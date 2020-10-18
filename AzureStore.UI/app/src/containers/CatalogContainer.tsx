import { connect } from 'react-redux';
import { getCatalogItems, selectItemActionCreator } from '../actions/catalog'
import Catalog from '../components/Catalog';

const mapStateToProps = (state: any) => {
    return {
        catalogItems: state.catalog.catalogItems
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCatalog: () => dispatch(getCatalogItems()),
        onItemSelect: (item:any) => selectItemActionCreator(item)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
