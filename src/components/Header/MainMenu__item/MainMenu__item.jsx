import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './MainMenu__item.module.sass';

function MainMenu__item(props) {
    return <div className={styles.item}>
        <NavLink to={props.link} className={styles.item__link}>
                {props.name}
        </NavLink >
    </div>;
}

export default MainMenu__item;