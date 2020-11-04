import { connect } from "react-redux";
import {BasketBadge} from "../components/Basket";

const mapStateToProps = (state: any) => {
    return {
        selectedItemsCount: state.catalog.selectedItems.length
    };
}

export default connect(mapStateToProps)(BasketBadge);