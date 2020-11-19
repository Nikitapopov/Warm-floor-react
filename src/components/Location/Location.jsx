import React, {useState} from 'react';
import styles from './Location.module.sass';
import ContactsForm from "../common/FormsControls/ContactsForm";
import cn from 'classnames';

let Location = () => {
    let [isMapScrolling, setIsMapScrolling] = useState(false);
    let [isMapClicked, setIsMapClicked] = useState(false);

    return(
        <section className={styles.location}>
            <div className={cn(styles.location__wrapMap)}
                 onMouseOver={() => {
                     setIsMapScrolling(true);
                 }}
                 onMouseOut={() => {
                     setIsMapScrolling(false);
                 }}
                 onClick={() => {
                     setIsMapClicked(true);
                 }}>
                <p className={cn(styles.location__mapTip, {
                    [styles.location__isTip]:
                    isMapScrolling && !isMapClicked
                })}>Нажмите на карту</p>
                <iframe
                    className={cn(styles.location__map, {[styles.location__mapIsNotClicked]: !isMapClicked})}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadda59f700257388599f44af2ee95833e8e0f942979e541431d43951cc8834b8&amp;source=constructor"
                    width="100%" height="400" frameBorder="0">
                </iframe>
                <ContactsForm/>
            </div>
        </section>
    );
};

export default Location;