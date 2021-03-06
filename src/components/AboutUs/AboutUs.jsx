import React from 'react';
import styles from './AboutUs.module.sass';
import cn from "classnames";

let AboutUs = () => {
    return(
        <section className='section'>
            <div className={`container container_decoration`}>
                <div className='section__titleBox'>
                    <p className='section__title'>
                        О нас
                    </p>
                </div>
                <p className={cn('section__text', styles.text)}>
                    <b>ООО «Партнер СВ»</b> - компания, работающая в направлении электрического отопления и подогрева от теплого пола, ремонта и отделки помещений. Организация на рынке города Кирова и Кировской области работает с 2009 года.
                    <br/>Являемся представителями нескольких компаний по производству электрических систем теплого пола, в т.ч. завода «Daewoo Enertec» с правом продажи, монтажа и ремонта продукции.
                    <br/>
                    <br/><b>Широкий ассортимент электрических теплых полов</b> включает в себя самые востребованные товарные позиции для обогрева.
                    <br/>
                    <br/><b>Всегда в наличии для вас:</b>
                    <br/> - единственные на рынке ремонтируемые водно-электрические системы XL PIPE,
                    <br/> - тонкий кабельный мат под плитку,
                    <br/> - инфракрасная пленка под ламинат и линолеум,
                    <br/> - различные виды кабельных теплых полов под любые напольные покрытия,
                    <br/> - терморегуляторы: простые, программируемые, с управлением через интернет (в сети Wi-Fi)
                    <br/>
                    <br/><b>Основное направление нашей компании – теплый пол для любых задач:</b>
                    <br/> - для отопления частных домов, на лоджии, в других помещениях;
                    <br/> - создание комфортного тепла в зонах, где используется керамическая плитка и керамогранит (кухня, санузел, прихожая);
                    <br/> - актуально для подогрева холодных полов 1-го этажа многоквартирых построек, где используется ламинат и линолеум;
                    <br/> - подогрев в теплицах;
                    <br/> - для борьбы с антиобледенением на входных группах и подъездных путях.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;