import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.sass';
import MainMenu__item from "./MainMenu__item/MainMenu__item";
import Burger from "../common/Burger/Burger";
import cn from 'classnames';

const menuItems = [
    {name: 'Каталог', link: '/katalog'},
    {name: 'Отзывы', link: '/otzyvy'},
    {name: 'Новости', link: '/novosti'},
    {name: 'Акции', link: '/akczii'},
    {name: 'О нас', link: '/o-nas'},
    {name: 'Контакты', link: '/kontakty'}
];

let Header = () => {
    let [isBurgerOpened, setIsBurgerOpened] = useState(false);

    return <header className={cn(styles.header,
        {[styles.header__isBurgerOpened]: isBurgerOpened}, 'clearfix')}>
        <div className={cn(styles.header__burgerBox, 'd-block d-md-none')}>
            <Burger menuItems={menuItems} setIsBurgerOpened={setIsBurgerOpened}/>
        </div>
        <nav className={cn('d-none d-md-block', styles.header__main_menu)}>
            {menuItems.slice(3, 6).map((item, index) =>
                <MainMenu__item key={index} name={item.name} link={item.link}/>
            )}
        </nav>
        <div className={cn(styles.header__boxTitle, 'clearfix')}>
            <Link to="/" className={styles.header__title}>Теплый пол</Link>
            <a className={styles.header__phone} target="_parent" rel="nofollow" href="tel:">+ 7 (912) 734 48 80</a>
        </div>
        <nav className={cn('d-none d-md-block', styles.header__main_menu)}>
            {menuItems.slice(0, 3).map((item, index) =>
                <MainMenu__item key={index} name={item.name} link={item.link}/>
            )}
        </nav>
    </header>
};

export default Header;