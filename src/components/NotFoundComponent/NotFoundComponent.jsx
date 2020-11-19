import React from 'react';
import styles from './NotFoundComponent.module.sass';
import {Link, withRouter} from "react-router-dom";

let NotFoundComponent = (props) => {
    return <section className={styles.notFound}>
        <img src={require('../../assets/img/404.png')} alt="Not Found"
             className={styles.notFound__img}/>
        <div className={styles.notFound__btnBox}>
            <Link to={'/'} className={styles.notFound__btn}>Вернуться на главную</Link>
        </div>
    </section>
};

export default NotFoundComponent = withRouter(NotFoundComponent);