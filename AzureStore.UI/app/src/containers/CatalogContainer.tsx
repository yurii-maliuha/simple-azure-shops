import { connect } from 'react-redux';
import { getCatalogItems } from '../actions/catalog'
import Catalog from '../components/Catalog';

const mapStateToProps = (state: any) => {
    return {
        catalogItems: state.catalog.catalogItems
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCatalog: () => dispatch(getCatalogItems())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
