import React from "react";
import preloader from "../../../assets/img/preloader.gif";
import styles from './Preloader.module.sass';

let Preloader = () => {
    return <div className={styles.preloader__imgBox}>
        <img src={preloader} className={styles.preloader__img}/>
    </div>
};

export default Preloader;