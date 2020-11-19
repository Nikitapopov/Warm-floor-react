import React from 'react';
import styles from './FeedbackItem.module.sass';
import cn from 'classnames';

let FeedbackItem = ({author, date, rating, comment, photoUrl}) => {
    return <div className={cn('row', styles.feedback)}>
        <div className={cn('col-3 col-md-2 col-lg-2', styles.feedback__authorBox)}>
            <div>
                <img className={styles.feedback__photoAuthor} src={photoUrl || require("../../../assets/img/femaleAvatar.png")} alt="TODO"/>
            </div>
            <span><b>{author}</b></span>
            <div>
                {
                    [0, 1, 2, 3, 4].map((ratingIndex) => {
                        return <img src={rating > ratingIndex
                            ? require('../../../assets/img/icons/rating_stars/icon_star_red.svg')
                            : require('../../../assets/img/icons/rating_stars/icon_star_grey.svg')}
                                    alt="TODO"
                                    key={ratingIndex}
                                    className={styles.feedback__ratingStar}/>
                    })
                }
            </div>
        </div>
        <div className='col-9 col-md-8 col-lg-8'>
            <div className={styles.feedback__commentBox}>
                <p className={styles.feedback__comment}>
                    {comment}
                </p>
            </div>
        </div>
        <div className={cn('col-12 col-md-2', styles.feedback__dateBox)}>
            <p className={styles.feedback__date}>
                {date}
            </p>
        </div>
    </div>;
};

export default FeedbackItem;