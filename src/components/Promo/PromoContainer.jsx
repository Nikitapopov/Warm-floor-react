import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {setNecessaryPromotions, setCurrentPromotionNumber, setCurrentPage} from "../../redux/promo_reducer";
import Articles from "../Articles/Articles";

class PromoContainer extends React.PureComponent {
    componentDidMount() {
        this.onChangePromotions();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.page !== prevProps.match.params.page ||
            this.props.match.params.articleNumber !== prevProps.match.params.articleNumber)
            this.onChangePromotions();
    }

    onChangePromotions = () => {
        this.props.setCurrentPromotionNumber(this.props.match.params.articleNumber || null);
        this.props.setCurrentPage(this.props.match.params.page || 1);
        this.props.setNecessaryPromotions();
    };

    getArticles = () => {
        return this.props.isArticlesDownloaded ? this.props.articles : null;
    };

    getArticle = () => {
        return this.props.isArticleDownloaded ? this.props.article : null;
    };

    render() {
        return <Articles articles={this.getArticles()}
                         isArticlesDownloaded={this.props.isArticlesDownloaded}
                         article={this.getArticle()}
                         isArticleDownloaded={this.props.isArticleDownloaded}
                         currentPage={this.props.currentPage}
                         articlesSetting={{name: 'Акции', url: 'akczii'}}/>
    };
}

let mapStateToProps = (state) => ({
    articles: state.promo.promotions,
    isArticlesDownloaded: state.promo.isPromotionsDownloaded,
    article: state.promo.promotion,
    isArticleDownloaded: state.promo.isPromotionDownloaded,
    currentArticleNumber: state.promo.currentPromotionNumber,
    currentPage: state.promo.currentPage,
});

let WithURLDataContainerComponent = withRouter(PromoContainer);

export default connect(mapStateToProps, {
    setNecessaryPromotions,
    setCurrentPromotionNumber,
    setCurrentPage,
})(WithURLDataContainerComponent);