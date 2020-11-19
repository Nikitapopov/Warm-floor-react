import React from 'react';
import styles from './WelcomeWall.module.sass';

let WelcomeWall = () => {
    return(
        <section className={styles.welcome_wall}>
            <div className={`container container_decoration`}>
                <img className={styles.welcomeImg}
                     srcSet={require('../../assets/img/welcomImg-mobile.webp') + ' 300w, ' +
                        require('../../assets/img/welcomImg-small.webp') + ' 500w, ' +
                        require('../../assets/img/welcomImg.webp') + ' 1744w'}
                     sizes="(max-width: 400px) 1px,
                        (max-width: 900px) 401px,
                        (min-width: 900px) 901px"
                     src={require('../../assets/img/welcomImg.webp')}
                     alt={'Продажа и монтаж теплых полов'}/>
            </div>
        </section>
    );
};

export default WelcomeWall;