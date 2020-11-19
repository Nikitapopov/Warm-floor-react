import React from 'react';
import styles from './Footer.module.sass';
import {Link} from "react-router-dom";

let Footer = () => {
    return(
        <section className={styles.footer}>
            <div className="row">
                <div className="col-md-3 col-lg-4 d-none d-md-block">
                    <div className={styles.footer__logo_box}>
                        <p className={styles.footer__title}>
                            Теплый пол
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-8">
                    <div className={styles.footer__desc_box}>
                        <p className={styles.footer__desc}>
                            ООО «Партнер СВ». Все права защищены.<br/>© 2009-2020 Партнер СВ - продажа и монтаж электрических теплых полов
                        </p>
                        <p className={styles.footer__agreement_notice}>
                            <Link to="/privacy">
                                Оставляя данные на сайте, Вы соглашаетесь с Политикой конфиденциальности и защиты информации
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;