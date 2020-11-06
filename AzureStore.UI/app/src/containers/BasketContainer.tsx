import { connect } from "react-redux";
import { submitOrderCreation } from "../actions/ordering";
import {Basket} from "../components/Basket";

const mapStateToProps = (state: any) => {
    return {
        selectedItems: state.catalog.selectedItems
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitOrder: (order: any) => dispatch(submitOrderCreation(order))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);