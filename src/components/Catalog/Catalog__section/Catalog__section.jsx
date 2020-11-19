import React from 'react';
import styles from './Catalog__section.module.sass';
import { Link } from 'react-router-dom';

function Catalog__section({id, img, name}) {
    return <Link to={`/katalog/${id}`}
                 className={`${styles.item}`}>
        <img src={img} alt={name} className={styles.item__img}/>
        <p className={styles.item__text}>
            {name}
        </p>
    </Link>;
}

export default Catalog__section;