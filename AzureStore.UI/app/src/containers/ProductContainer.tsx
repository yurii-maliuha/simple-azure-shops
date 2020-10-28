import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { getProduct } from "../actions/product";
import ProductDetails from "../components/ProductDetails";

const mapStateToProps = (state: any, ownProps: any) => {
    console.log(ownProps);
    return {
        loading: state.product.loading,
        commodity: state.product.commodity
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProduct: (id: number) => dispatch(getProduct(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter<any,any>(ProductDetails));
