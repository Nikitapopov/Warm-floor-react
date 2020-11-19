import React, {Component, lazy} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.sass';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import {withSuspense} from "./hoc/withSuspense";
import PopularProductsContainer from "./components/PopularProducts/PopularProductsContainer";
import ScrollToTop from "./components/common/ScrollToTop";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
const WelcomeWall = lazy(() =>  import("./components/WelcomeWall/WelcomeWall"));
const Introduction = lazy(() =>  import("./components/Introduction/Introduction"));
const CompanyAdvantages = lazy(() =>  import("./components/CompanyAdvantages/CompanyAdvantages"));
const CatalogContainer = lazy(() =>  import("./components/Catalog/CatalogContainer"));
const FeedbackContainer = lazy(() =>  import("./components/Feedback/FeedbackPageContainer"));
const NewsContainer = lazy(() =>  import("./components/News/NewsContainer"));
const PromoContainer = lazy(() =>  import("./components/Promo/PromoContainer"));
const AboutUs = lazy(() =>  import("./components/AboutUs/AboutUs"));
const Contacts = lazy(() =>  import("./components/Contacts/Contacts"));
const Location = lazy(() =>  import("./components/Location/Location"));
const Privacy = lazy(() =>  import("./components/Privacy/Privacy"));
const NotFoundComponent = lazy(() =>  import("./components/NotFoundComponent/NotFoundComponent"));

class App extends Component {
    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors, {passive: true});
        document.title = `Теплые полы`;
    };

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    catchAllUnhandledErrors = () => {
        // alert('Some Error');
    };

    render() {
        return <BrowserRouter>
            <ScrollToTop/>
            <Header/>

            <Switch>
                <Route path='/katalog/:sectionNumber?/:productNumber?/:page?'>
                    <Route render={withSuspense(CatalogContainer)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/privacy'>
                    <Route render={withSuspense(Privacy)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/otzyvy'>
                    <Route render={withSuspense(FeedbackContainer)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/novosti/:articleNumber?/:page?'>
                    <Route render={withSuspense(NewsContainer)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/akczii/:articleNumber?'>
                    <Route render={withSuspense(PromoContainer)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/o-nas'>
                    <Route render={withSuspense(AboutUs)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/kontakty'>
                    <Route render={withSuspense(Contacts)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route exact path="/">
                    <Route render={withSuspense(WelcomeWall)}/>
                    <PopularProductsContainer/>
                    <Route render={withSuspense(CompanyAdvantages)}/>
                    <Route render={withSuspense(Introduction)}/>
                    <Route render={withSuspense(Location)}/>
                </Route>
                <Route path='/404'
                       render={withSuspense(NotFoundComponent)}/>
                <Route path='*'
                       render={() => <Redirect to="/404"/>}/>
            </Switch>

            <Footer/>
        </BrowserRouter>
    }
}

const AppContext = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
};

export default AppContext;