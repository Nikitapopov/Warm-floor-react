import React from 'react';
import styles from './CompanyAdvantages.module.sass';
import CompanyAdvantages__item from "./CompanyAdvantages__item/CompanyAdvantages__item";

const companyAdvantages = [
    {name: 'Гарантия качества работы', icon: 'icon_quality.png'},
    {name: `Гарантийное и послегарантийное обслуживание`, icon: 'icon_warranty_service.png'},
    {name: 'Большой ассортимент теплых полов', icon: 'icon_assortment.png'},
    {name: 'Опыт работы более 10 лет', icon: 'icon_service_life.png'},
    {name: 'Полный комплекс работ', icon: 'icon_equipment_installation.png'},
];

let CompanyAdvantages = () => {
    return(
        <section>
            <div className={`container container_decoration`}>
                <p className='sectionMiddleTitle'>
                    Наши преимущества
                </p>
                <div className={`row justify-content-center ${styles.advantagesBox}`}>
                    {companyAdvantages.map((advantage, index) =>
                        <CompanyAdvantages__item key={index}
                                                 name={advantage.name}
                                                 icon={advantage.icon}/>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CompanyAdvantages;