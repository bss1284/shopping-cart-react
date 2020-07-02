import { connect } from "react-redux";
import ProductList from "../components/ProductList";

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(ProductList);
