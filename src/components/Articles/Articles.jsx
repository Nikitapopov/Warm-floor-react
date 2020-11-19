import React from 'react';
import { Route, Switch} from 'react-router-dom';
import styles from './Articles.module.sass';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Preloader from "../common/Preloader/Preloader";
import cn from 'classnames'
import Articles__item from "./Articles__item/Articles__item";
import Articles__itemPage from "./Articles__item/Articles__itemPage/Articles__itemPage";
import Paginator from "../common/Paginator/Paginator";

let getBriefPartOfText = (str) => {
    return str.slice(0, str.indexOf('\n'));
};

let Articles = ({articles, isArticlesDownloaded, article, isArticleDownloaded, articlesSetting, currentPage, totalNewsCount, pageSize, onPageChanged}) => {
    return (
        <section className='section'>
             <div className={cn('container', 'container_decoration')}>
                 <div>
                     <Breadcrumbs/>
                     <div className='section__titleBox'>
                         {isArticleDownloaded
                             ? <p className='section__title'>{article.name}</p>
                             :<p className='section__title'>{articlesSetting.name}</p>}
                     </div>
                 </div>
                 <Switch>
                     <Route exact path={`/${articlesSetting.url}`}>
                         {!isArticlesDownloaded && <Preloader/>}
                         {isArticlesDownloaded && !articles &&
                         <div className={styles.noArticles}>
                             <p>В данный момент никаких мероприятий не проводится.</p>
                         </div>
                         }
                         {isArticlesDownloaded && articles &&
                         <div>
                             <div className='row'>
                             {articles.map(item => {
                                 return <div className='col-12 col-lg-6' key={item.id}>
                                     <Articles__item id={item.id}
                                                     name={item.name}
                                                     date={new Date(item.date).toLocaleDateString()}
                                                     text={getBriefPartOfText(item.text)}
                                                     photo={item.photos[0]}
                                                     articlesUrl={articlesSetting.url}/>
                                 </div>
                             })}
                             </div>
                             <div className='paginatorBox'>
                                 <Paginator currentPage={currentPage}
                                            onPageChanged={onPageChanged}
                                            totalItemsCount={totalNewsCount}
                                            pageSize={pageSize}/>
                             </div>
                         </div>
                         }
                     </Route>
                     <Route exact path={`/${articlesSetting.url}/:articleNumber`}>
                         {!isArticleDownloaded && <Preloader/>}
                         {isArticleDownloaded &&
                             <Articles__itemPage article={article}/>
                         }
                     </Route>
                 </Switch>
             </div>
        </section>
    );
};

export default React.memo(Articles,(prevProps, nextProps) => {
    return (!(prevProps.isArticlesDownloaded !== nextProps.isArticlesDownloaded ||
        prevProps.isArticleDownloaded !== nextProps.isArticleDownloaded ||
        prevProps.currentPage !== nextProps.currentPage));
});