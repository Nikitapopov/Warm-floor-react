import React from 'react';
import styles from './Articles__itemPage.module.sass';
import '../../../Catalog/Catalog__productPage/Catalog__productPage.sass';
import "react-image-gallery/styles/css/image-gallery.css";
import cn from 'classnames'
import PopularProductsContainer from "../../../PopularProducts/PopularProductsContainer";
import 'react-image-lightbox/style.css';
import ImageGallery from "react-image-gallery";

function Articles__itemPage({article: {name, date, text, photos}}) {
    console.log(text);
    const images = photos.map(img => (
        {
            original: img,
            originalAlt: name,
            thumbnail: img,
            thumbnailAlt : name
        }
    ));
    let fixLineBreak = (str) => str.replace(/\\n/g, '\n');
    return <section>
        <div className={'row'}>
            <div className={cn(styles.imageGalleryBox, 'col-6')}>
                <ImageGallery items={images}
                              thumbnailPosition={'left'}
                              showFullscreenButton={true}
                              showPlayButton={false}/>
            </div>
            <div className={cn('col-6', styles.item__textBox)}>
                <p className={styles.item__text}>{fixLineBreak(text)}</p>
                <p className={styles.item__date}>{new Date(date).toLocaleDateString()}</p>
            </div>
        </div>
        <PopularProductsContainer/>
    </section>
}

export default Articles__itemPage;