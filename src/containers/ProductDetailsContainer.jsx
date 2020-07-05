import { connect } from "react-redux";
import ProductDetails from "../components/ProductDetails";

const mapStateToProps = (state) => {
  const finded = state.products.find((x) => x.id === state.select_details);
  const selectProduct = Object.assign({}, finded);
  return { ...selectProduct };
};

export default connect(mapStateToProps)(ProductDetails);
