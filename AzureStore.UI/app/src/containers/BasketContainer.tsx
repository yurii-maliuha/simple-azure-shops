import { connect } from "react-redux";
import Basket from "../components/Basket";

const mapStateToProps = (state: any) => {
    return {
        selectedItems: state.catalog.selectedItems
    };
}

export default connect(mapStateToProps)(Basket);