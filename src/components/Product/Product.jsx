import React from 'react';
import styles from './Product.module.sass';
import {Link} from "react-router-dom";

function Product({id, currentSectionNumber, name, imgSrc, imgAlt, current_price, primary_price}) {
    return <div className={styles.item}>
        <Link to={`/katalog/${currentSectionNumber}/${id}`}
            className={styles.item__link}>
            <img className={styles.item__img} src={imgSrc} alt={imgAlt}/>
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
}

export default Product;