import { connect } from "react-redux";
import {BasketBadge} from "../components/Basket";

const mapStateToProps = (state: any) => {
    let selectedCount = 0;
    state.catalog.selectedItems.forEach((item: any) => selectedCount += item.quantity);
    return {
        selectedItemsCount: selectedCount
    };
}

export default connect(mapStateToProps)(BasketBadge);