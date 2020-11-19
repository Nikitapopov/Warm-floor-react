import React, {useState} from 'react';
import styles from './Paginator.module.sass';
import cn from 'classnames'

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span key={p}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}
                                 className={cn(styles.page_number,
                                     {[styles.selectedPage]: currentPage === p})}>{p}
                </span>
                )
            }
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </div>
    </div>
};

export default Paginator;