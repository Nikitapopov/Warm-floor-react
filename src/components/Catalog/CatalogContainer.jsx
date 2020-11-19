import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Catalog from "./Catalog";
import {getSections,
    getProducts,
    getProduct,
    setCurrentSectionNumber,
    setCurrentProductNumber,
    setCurrentPage,
} from "../../redux/catalog_reducer";

class CatalogContainer extends React.PureComponent {

    componentDidMount() {
        this.onChangeCatalog();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.page !== prevProps.match.params.page
        || this.props.match.params.productNumber !== prevProps.match.params.productNumber
        || this.props.match.params.sectionNumber !== prevProps.match.params.sectionNumber){
            this.onChangeCatalog();
        }
    }

    onChangeCatalog = () => {
        let currentSectionNumber = Number(this.props.match.params.sectionNumber),
            currentProductNumber = Number(this.props.match.params.productNumber);
        this.props.setCurrentSectionNumber(currentSectionNumber || null);
        this.props.setCurrentProductNumber(currentProductNumber || null);
        this.props.setCurrentPage(this.props.match.params.page || 1);
        if(currentSectionNumber){
            if(currentProductNumber){
                this.props.getProduct(currentProductNumber);
            } else {
                this.props.getProducts(currentSectionNumber);
            }
        } else {
            this.props.getSections();
        }
    };

    render() {
        return <Catalog sections={this.props.sections}
                        products={this.props.products}
                        product={this.props.product}
                        currentSectionNumber={this.props.currentSectionNumber}
                        currentProductNumber={this.props.currentProductNumber}
                        isSectionsDownloaded={this.props.isSectionsDownloaded}
                        isProductsDownloaded={this.props.isProductsDownloaded}
                        isProductDownloaded={this.props.isProductDownloaded}/>
    };
}

let mapStateToProps = (state) => ({
    sections: state.catalog.sections,
    products: state.catalog.products,
    product: state.catalog.product,
    currentPage: state.catalog.currentPage,
    currentSectionNumber: state.catalog.currentSectionNumber,
    currentProductNumber: state.catalog.currentProductNumber,
    isSectionsDownloaded: state.catalog.isSectionsDownloaded,
    isProductsDownloaded: state.catalog.isProductsDownloaded,
    isProductDownloaded: state.catalog.isProductDownloaded,
});

let WithURLDataContainerComponent = withRouter(CatalogContainer);

export default connect(mapStateToProps, {
    getSections,
    getProducts,
    getProduct,
    setCurrentSectionNumber,
    setCurrentProductNumber,
    setCurrentPage,
})(WithURLDataContainerComponent);