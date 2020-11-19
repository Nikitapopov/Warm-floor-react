import React from 'react';
import styles from './PopularProducts__item.module.sass';
import {Link} from "react-router-dom";

let PopularProducts__item = ({id, img, current_price, primary_price, name, sectionNumber}) => {
    return <div className={styles.itemBox}>
        <div className={styles.item}>
            <Link to={`/katalog/${sectionNumber}/${id}`} className={styles.item__link}>
                <img className={styles.item__img} src={img.srcSmall} alt={name}/>
                <div className={styles.item__info}>
                    <div className={styles.item__priceBox}>
                        <p className={styles.item__current_price}>От {current_price} р</p>
                        <p className={`${styles.item__primary_price}`}>
                            <span>{primary_price}</span></p>
                    </div>
                    <p className={styles.item__name}>{name}</p>
                </div>
            </Link>
        </div>
    </div>
};

export default PopularProducts__item;