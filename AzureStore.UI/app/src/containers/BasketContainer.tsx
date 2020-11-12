import { connect } from "react-redux";
import { deleteItem, selectItem, unselectItem } from "../actions/catalog";
import {Basket} from "../components/Basket";
import OrderItem from "../models/OrderItem";

const mapStateToProps = (state: any) => {
    return {
        selectedItems: Array.from(state.catalog.selectedItems.values()) as OrderItem[]
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onItemSelect: (item:any) => dispatch(selectItem(item)),
        onItemUnselect: (item:any) => dispatch(unselectItem(item)),
        onItemDelete: (id: number) => dispatch(deleteItem(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);