import React from 'react';
import styles from './Articles__item.module.sass';
import {Link} from "react-router-dom";
import cn from "classnames";

function Articles__item({id, name, date, text, photo, articlesUrl}) {
    return <Link to={`/${articlesUrl}/${id}`}
                 className={cn('row', styles.item)}>
        <div className={cn('col-5 col-sm-6', styles.item__imgBox)}>
            <img src={photo} className={styles.item__img} alt={name}/>
        </div>
        <div className={cn('col-7 col-sm-6', styles.item__descriptionBox)}>
            <p className={styles.item__name}>{name}</p>
            <p className={styles.item__date}>{date}</p>
            <p className={styles.item__text}>{text}</p>
        </div>
    </Link>
}

export default Articles__item;