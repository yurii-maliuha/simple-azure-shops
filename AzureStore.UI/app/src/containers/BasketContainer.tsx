import { connect } from "react-redux";
import { selectItemAction } from "../actions/catalog";
import { submitOrderCreation } from "../actions/ordering";
import Basket from "../components/Basket";

const mapStateToProps = (state: any) => {
    return {
        selectedItems: state.catalog.selectedItems
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onItemSelect: (item:any) => dispatch(selectItemAction(item)),
        submitOrder: (order: any) => dispatch(submitOrderCreation(order))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);