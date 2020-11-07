import { connect } from "react-redux";
import { selectItem, unselectItem } from "../actions/catalog";
import { submitOrderCreation } from "../actions/ordering";
import {Basket} from "../components/Basket";
import OrderItem from "../models/OrderItem";

const mapStateToProps = (state: any) => {
    return {
        selectedItems: Array.from(state.catalog.selectedItems.values()) as OrderItem[]
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitOrder: (order: any) => dispatch(submitOrderCreation(order)),
        onItemSelect: (item:any) => dispatch(selectItem(item)),
        onItemUnselect: (item:any) => dispatch(unselectItem(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);