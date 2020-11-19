import React from 'react';
import { Route, Switch} from 'react-router-dom';
import styles from './Catalog.module.sass';
import Catalog__section from "./Catalog__section/Catalog__section";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Catalog__productPage from "./Catalog__productPage/Catalog__productPage";
import Preloader from "../common/Preloader/Preloader";
import Product from "../Product/Product";
import cn from 'classnames'
import PopularProductsContainer from "../PopularProducts/PopularProductsContainer";

let Catalog = (props) => {
    return (
        <section className='section'>
            <div className={cn('container', 'container_decoration')}>
                <div>
                    <Breadcrumbs/>
                    <div className='section__titleBox'>
                        <span className='section__title'>Каталог</span>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/katalog">
                        {!props.isSectionsDownloaded && <Preloader/>}
                        {props.isSectionsDownloaded &&
                        <div className={`row ${styles.catalog__items}`}>
                            {props.sections.map((item, index) => {
                                    return <div className=' col-6 col-sm-4 col-lg-3' key={index}>
                                        <Catalog__section id={item.id}
                                                          name={item.name}
                                                          img={item.img}/>
                                    </div>
                                }
                            )}
                        </div>
                        }
                    </Route>
                    <Route exact path="/katalog/:sectionNumber">
                        {!props.isProductsDownloaded && <Preloader/>}
                        {props.isProductsDownloaded &&
                        <div className={`row ${styles.catalog__items}`}>
                            {props.currentSectionNumber && props.products.map((item, index) => {
                                    return <div className='col-6 col-sm-4 col-lg-3' key={index}>
                                        <Product id={item.id}
                                                 imgSrc={item.img[0].srcSmall}
                                                 imgAlt={item.img[0].alt}
                                                 current_price={item.current_price}
                                                 primary_price={item.primary_price}
                                                 name={item.name}
                                                 currentSectionNumber={props.currentSectionNumber}/>
                                    </div>
                                }
                            )}
                        </div>}
                    </Route>
                    <Route exact path="/katalog/:sectionNumber/:productNumber">
                        {!props.isProductDownloaded && <Preloader/>}
                        {props.isProductDownloaded &&
                            <Catalog__productPage productPage={props.product}/>
                        }
                    </Route>
                </Switch>
            </div>
            <PopularProductsContainer/>
        </section>
    );
};

export default React.memo(Catalog,(prevProps, nextProps) => {
    return (!(prevProps.isSectionsDownloaded !== nextProps.isSectionsDownloaded ||
        prevProps.isProductsDownloaded !== nextProps.isProductsDownloaded ||
        prevProps.isProductDownloaded !== nextProps.isProductDownloaded));
});