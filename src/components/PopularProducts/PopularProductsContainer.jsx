import React from 'react';
import {getPopularProducts} from "../../redux/popularProducts_reducer";
import PopularProducts from "./PopularProducts";
import {connect} from "react-redux";

class PopularProductsContainer extends React.PureComponent{
    componentDidMount() {
        this.props.getPopularProducts();
    }
    render() {
        return <PopularProducts products={this.props.products}
                                isProductsDownloaded={this.props.isProductsDownloaded}/>
    }
}

let mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    isProductsDownloaded: state.popularProducts.isProductsDownloaded,
});

export default connect(mapStateToProps, {
    getPopularProducts
})(PopularProductsContainer);