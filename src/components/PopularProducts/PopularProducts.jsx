import React from 'react';
import styles from './PopularProducts.module.sass';
import './PopularProducts.sass';
import PopularProducts__item from "./PopularProducts__item/PopularProducts__item.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cn from 'classnames';
import Product from "../Product/Product";

let PopularProducts = ({isProductsDownloaded, products}) => {
    function SampleArrow({className, style, onClick, side}) {
        const additionalStyle = {
                ...style,
                zIndex: "5",
        };
        return side === 'next'
            ? <button className={className}
                    style={{
                        ...additionalStyle,
                        right: "-28px",
                    }}
                    onClick={onClick}
            />
            : <button className={className}
                      style={{
                          ...additionalStyle,
                          left: "-39px",
                      }}
                      onClick={onClick}
            />;
    }

    let settings = {
        className: "slider variable-width center",
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        prevArrow: <SampleArrow side={'prev'}/>,
        nextArrow: <SampleArrow side={'next'}/>
    };

    return(
        <section>
            <div className={`container container_decoration ${styles.popular_products__container}`}>
                <div className='section__titleBox'>
                    <p className={cn('section__title', styles.popular_products__title)}>
                        Хиты продаж
                    </p>
                </div>
                {isProductsDownloaded && products &&
                <div className={styles.sliderBox}>
                    <Slider {...settings}>
                        {products.map(item =>
                            <PopularProducts__item key={item.id}
                                                   id={item.id}
                                                   img={item.img[0]}
                                                   current_price={item.current_price}
                                                   primary_price={item.primary_price}
                                                   name={item.name}
                                                   sectionNumber={item.sectionNumber}/>
                        )}
                    </Slider>
                </div>
                }
            </div>
        </section>
    );
};

export default PopularProducts;