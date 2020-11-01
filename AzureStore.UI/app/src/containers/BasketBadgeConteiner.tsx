import { connect } from "react-redux";
import {BasketBadge} from "../components/Basket";

const mapStateToProps = (state: any) => {
    return {
        selectedItems: state.catalog.selectedItems
    };
}

export default connect(mapStateToProps)(BasketBadge);