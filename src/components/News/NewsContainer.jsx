import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {setNecessaryNews, setCurrentNewsNumber, setCurrentPage} from "../../redux/news_reducer";
import Articles from "../Articles/Articles";

class NewsContainer extends React.PureComponent {
    componentDidMount() {
        this.onChangeNews();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.page !== prevProps.match.params.page ||
            this.props.match.params.articleNumber !== prevProps.match.params.articleNumber)
            this.onChangeNews();
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setNecessaryNews();
    };

    onChangeNews = () => {
        this.props.setCurrentNewsNumber(this.props.match.params.articleNumber || null);
        this.props.setCurrentPage(this.props.match.params.page || 1);
        this.props.setNecessaryNews();
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
                         pageSize={this.props.pageSize}
                         totalNewsCount={this.props.totalNewsCount}
                         onPageChanged={this.onPageChanged}
                         articlesSetting={{name: 'Новости', url: 'novosti'}}/>
    };
}

let mapStateToProps = (state) => ({
    articles: state.news.news,
    isArticlesDownloaded: state.news.isNewsDownloaded,
    article: state.news.oneNews,
    isArticleDownloaded: state.news.isOneNewsDownloaded,
    currentArticlesNumber: state.news.currentNewsNumber,
    currentPage: state.news.currentPage,
    totalNewsCount: state.news.totalNewsCount,
    pageSize: state.news.pageSize,
});

let WithURLDataContainerComponent = withRouter(NewsContainer);

export default connect(mapStateToProps, {
    setNecessaryNews,
    setCurrentNewsNumber,
    setCurrentPage,
})(WithURLDataContainerComponent);