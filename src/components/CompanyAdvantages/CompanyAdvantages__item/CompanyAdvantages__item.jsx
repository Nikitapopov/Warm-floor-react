import React from 'react';
import styles from './CompanyAdvantages__item.module.sass';

function CompanyAdvantages__item({name, icon}) {
    return <>
        <div className={`${styles.item} col-6 col-sm-4 col-xl-2`}>
            <img src={require('./../../../assets/img/icons/advantages/' + icon)}
                 className={styles.item__img}
                 alt={'Преимущество ' + name}/>
            <p className={styles.item__text} lang="ru">
                {name}
            </p>
        </div>
    </>
}

export default CompanyAdvantages__item;