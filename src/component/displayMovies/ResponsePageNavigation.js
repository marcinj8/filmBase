import React from 'react';

import PagesNavigaton from './PagesNavigation/PagesNavigation';

import './ResponsePageNavigation.css';

const responsePageNavigation = props => {
    const numberOfPages = <PagesNavigaton 
                onChangePage={props.onChangePage}
                currentPage={props.currentPage}
                numberOfPages={props.numberOfPages}/>;

    
    return (
        <div className='ResponsePageNavigation__container'>
            {numberOfPages}
        </div>
    )
}

export default responsePageNavigation;