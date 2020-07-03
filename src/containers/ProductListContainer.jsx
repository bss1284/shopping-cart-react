import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import {} from "react-router-dom";

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch({ type: "HANDLE_DETAILS", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
