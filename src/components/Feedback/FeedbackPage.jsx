import React from 'react';
import styles from './FeedbackPage.module.sass';
import Preloader from "../common/Preloader/Preloader";
import FeedbackItem from "./FeedbackItem/FeedbackItem";

let FeedbackPage = (props) => {
        return <section className='section'>
            <div className={`container container_decoration`}>
                <div>
                    <div className='section__titleBox'>
                        <span className='section__title'>Отзывы о компании</span>
                    </div>
                </div>
                <div className={styles.feedbacksBox}>
                    {!props.isFeedbacksDownloaded && <Preloader/>}
                    {props.isFeedbacksDownloaded &&
                    props.feedbacks.map(item => {
                        return <FeedbackItem key={item.id}
                                             author={item.author}
                                             date={new Date(item.date).toLocaleDateString()}
                                             rating={item.rating}
                                             comment={item.comment}
                                             photoUrl={item.photoUrl}/>
                    })
                    }
                </div>

            </div>
        </section>
};

export default FeedbackPage;