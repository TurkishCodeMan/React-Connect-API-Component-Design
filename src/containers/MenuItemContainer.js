import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MenuItem } from "../components/MenuItem";
import { removeItem, updateItemPrice, updateQuantity } from "../store/items/actions";
import { selectItemTotal } from "../store/items/selectors";

const mapStateToPros = (state, ownProps) => {
    return {
        total: selectItemTotal(state.items, ownProps)
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {

    return bindActionCreators(
        {
            remove: () => removeItem(ownProps.uuid),
            updatePrice: (price) => updateItemPrice(ownProps.uuid, price),
            updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity)
        },
        dispatch
    );


}




export const MenuItemContainer = connect(mapStateToPros, mapDispatchToProps)(MenuItem);