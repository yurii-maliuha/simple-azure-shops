import { connect } from 'react-redux';
import { getCatalogItems } from '../actions'
import Catalog from '../components/Catalog';

const mapStateToProps = (state: any) => {
    console.log(state);
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
