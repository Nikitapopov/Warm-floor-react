import React from 'react';
import styles from './Breadcrumbs.module.sass';
import {NavLink, withRouter} from "react-router-dom";
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import {connect} from "react-redux";
import {
    getSectionNamesById,
    getNewsNamesById,
    getPromotionsNamesById,
} from "../../redux/breadcrumbs_reducer";
import {compose} from "redux";

let BreadcrumbsHOC = (props) => {
    let Breadcrumbs = withBreadcrumbs(props.routes)(({breadcrumbs}) => {
        return <div className={styles.breadcrumbs__box}>
            {breadcrumbs.map(({match, breadcrumb}, index) => {
                return <NavLink key={index}
                                to={match.url}
                                className={styles.breadcrumb}>
                    {breadcrumb.props.children === 'Главная' &&
                    <img src={require('../../assets/img/icons/icon_home.svg')}
                         alt={'Главная'}
                         className={styles.breadcrumbs__homeImg}/>}
                    {breadcrumb.props.children !== 'Главная' && breadcrumb}
                </NavLink>
            })}
        </div>
    });
    return <Breadcrumbs/>
};

class BreadcrumbsContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {routes: [
                {path: '/', breadcrumb: 'Главная'},
                {path: '/katalog', breadcrumb: 'Каталог'},
                {path: '/novosti', breadcrumb: 'Новости'},
                {path: '/akczii', breadcrumb: 'Акции'},
                {path: '/katalog/:currentSectionNumber/:currentProductNumber', breadcrumb: null},
            ]};
    }
    componentDidMount() {
        this.getCurrentBreadcrumbs();
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params !== this.props.match.params){
            this.getCurrentBreadcrumbs();
        }
    }

    getCurrentBreadcrumbs = () => {
        switch (this.props.match.url.split('/')[1]) {
            case 'katalog':
                this.props.getSectionNamesById().then(() => {
                    const DynamicSectionBreadcrumb = ({match}) => (
                        <span>{this.props.sectionNamesById[match.params.currentSectionNumber]}</span>
                    );
                    this.setState({
                        routes: this.state.routes.concat([{
                            path: '/katalog/:currentSectionNumber',
                            breadcrumb: DynamicSectionBreadcrumb
                        }])
                    })
                }).catch(() => {
                    this.setState({
                        routes: this.state.routes.concat([{
                            path: '/katalog/:currentSectionNumber',
                            breadcrumb: null
                        }])
                    })
                });
                break;
            case 'novosti':
                this.props.getNewsNamesById().then(() => {
                    const DynamicNewsBreadcrumb = ({match}) => (
                        <span>{this.props.newsNamesById[match.params.articleNumber]}</span>
                    );
                    this.setState({
                        routes: this.state.routes.concat([{
                            path: '/novosti/:articleNumber',
                            breadcrumb: DynamicNewsBreadcrumb}])
                    })
                }).catch(() => {
                    this.setState({
                        routes: this.state.routes.concat([{
                            path: '/novosti/:articleNumber',
                            breadcrumb: null
                        }])
                    })
                });
                break;
            case 'akczii':
                this.props.getPromotionsNamesById().then(() => {
                    const DynamicPromotionsBreadcrumb = ({match}) => (
                        <span>{this.props.promotionsNamesById[match.params.articleNumber]}</span>
                    );
                    this.setState({
                        routes: this.state.routes.concat([{
                            path: '/akczii/:articleNumber',
                            breadcrumb: DynamicPromotionsBreadcrumb
                        }])
                    })
                }).catch(() => {
                    this.setState({
                        routes: this.state.routes.concat([{
                            path: '/akczii/:articleNumber',
                            breadcrumb: null
                        }])
                    })
                });
                break;
        }
    };

    render(){
        return <>
            {this.state.routes &&
            <BreadcrumbsHOC routes={this.state.routes }/>
            }
        </>
    }
}

let mapStateToProps = (state) => ({
    sectionNamesById: state.breadcrumbs.sectionNamesById,
    newsNamesById: state.breadcrumbs.newsNamesById,
    promotionsNamesById: state.breadcrumbs.promotionsNamesById,
});

export default compose(
    connect(mapStateToProps, {
        getSectionNamesById,
        getNewsNamesById,
        getPromotionsNamesById,
    }),
    withRouter,
)(BreadcrumbsContainer);