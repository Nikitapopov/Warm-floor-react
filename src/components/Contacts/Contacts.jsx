import React from 'react';
import styles from './Contacts.module.sass';
import cn from 'classnames'

let Contacts = () => {
    return(
        <section className='section'>
            <div className={`container container_decoration`}>
                <div className='section__titleBox'>
                    <p className='section__title'>
                        Контакты
                    </p>
                </div>
                <div className={cn('section__text', styles.text)}>
                    <b><p className={styles.textWithIcon}>Партнер СВ, ООО. Теплые полы</p></b>
                    <p className={cn(styles.textWithIcon, styles.textWithIconEmail)}>
                        partner.sv@mail.ru
                    </p>
                    <p className={cn(styles.textWithIcon, styles.textWithIconInstagram)}>
                        <a href="https://www.instagram.com/partner.sv">https://www.instagram.com/partner.sv</a>
                    </p>
                    <p className={cn(styles.textWithIcon, styles.textWithIconLocation)}>
                        г. Киров, Аптечный переулок (Теплые полы)
                    </p>
                    <table className={styles.table}>
                        <tbody>
                            <tr><td><p className={cn(styles.textWithIcon, styles.textWithIconTime)}>Пн-Пт:</p></td><td>09:00-17:00</td></tr>
                            <tr><td><p className={styles.textWithIcon}>Сб:</p></td><td>09:00-13:00</td></tr>
                            <tr><td><p className={styles.textWithIcon}>Вс:</p></td><td>Выходной</td></tr>
                        </tbody>
                    </table>
                    <table className={styles.table}>
                        <tbody>
                            <tr><td><p className={cn(styles.textWithIcon, styles.textWithIconPhone)}>8(912) 734-48-80</p></td></tr>
                            <tr><td><p className={styles.textWithIcon}>8(8332) 44-48-80</p></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

// let TextWithIcon = ({style, text}) => {
//     return <p className={cn(style, styles.textWithIcon)}>
//         {text}
//     </p>
// };

export default Contacts;