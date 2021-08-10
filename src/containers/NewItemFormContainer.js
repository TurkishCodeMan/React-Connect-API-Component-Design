import { NewItemForm } from "../components/NewItemForm";
import { connect } from "react-redux";
import { addNewItem } from "../store/items/actions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch, ownProps) => {

    return bindActionCreators(
        {
            onSubmit: addNewItem,
        },
        dispatch
    );
    // return {
    //     onSubmit: (name, price) => dispatch(addNewItem(name, price))
    // }
}

// //Simple Solution Auto bind and dispatch
// const mapDispatchToProps = {
//     onSubmit: addNewItem,
// };

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);