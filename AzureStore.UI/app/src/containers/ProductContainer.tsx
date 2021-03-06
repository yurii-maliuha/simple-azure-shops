import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { selectItem } from '../actions/catalog';
import { getProduct } from "../actions/product";
import ProductDetails from "../components/ProductDetails";
import Commodity from '../models/Commodity';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        loading: state.product.loading,
        commodity: state.product.commodity
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProduct: (id: number) => dispatch(getProduct(id)),
        onItemSelect: (item: Commodity) => dispatch(selectItem(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter<any,any>(ProductDetails));
