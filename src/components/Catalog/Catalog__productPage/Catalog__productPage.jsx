import React from 'react';
import styles from './Catalog__productPage.module.sass';
import './Catalog__productPage.sass';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import cn from 'classnames';

function Catalog__productPage({productPage: {current_price, img, name, primary_price, table, description}}) {
    const images = img.map(img => (
        {
            original: img.srcSmall,
            originalAlt: img.alt,
            thumbnail: img.srcSmall,
            thumbnailAlt: img.alt,
            fullscreen: img.src
        }
));

    let renderTable = (table) => {
        return table.map((tableItem, index) => {
            let keys = Object.keys(tableItem);
            return <tr key={index}>
                {(index === 0) &&
                    keys.map((key, index) => {
                        return <th key={index}>{tableItem[key]}</th>
                    })
                }
                {(index > 0) &&
                    keys.map((key, index) => {
                        return <td key={index}>{tableItem[key]}</td>
                    })
                }
            </tr>
        });
    };

    let fixLineBreak = (str) => str.replace(/\\n/g, '\n');

    return <div className={'row'}>
        <div className={cn(styles.imageGalleryBox, 'col-12 col-sm-6 col-lg-5')}>
            <ImageGallery items={images}
                          thumbnailPosition={'left'}
                          showFullscreenButton={true}
                          showPlayButton={false}/>
        </div>
        <div className={cn(styles.product__info, 'col-12 col-sm-6 col-lg-7')}>
            <div className={styles.product__nameBox}>
                <p>{name}</p>
            </div>
            <div className={styles.product__priceBox}>
                <p className={styles.product__currentPrice}>от {current_price} ₽</p>
                <p className={styles.product__primaryPrice}><span>{primary_price}</span></p>
            </div>
            <div className={styles.product__descriptionBox}>
                <p><b>Описание:</b><br/><br/>{fixLineBreak(description)}</p>
            </div>
        </div>
        {table.length !== 0 &&
        <div className={cn(styles.product__tableBox, 'col-12')}>
            <table className={styles.product__table}>
                <tbody>
                    {renderTable(table)}
                </tbody>
            </table>
        </div>
        }
    </div>
}

export default Catalog__productPage;