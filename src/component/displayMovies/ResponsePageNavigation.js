import React from 'react';

import './ResponsePageNavigation.css';

const responsePageNavigation = props => {
    const numberOfPages = [];
    let buttonSytle = ['ResponsePageNavigation__buttons']

    for(let i = 1; i <= props.numberOfPages; i++) {
        if(i === props.currentPage){
            buttonSytle = ['ResponsePageNavigation__buttons', 'ResponsePageNavigation__buttons--active'];
        } else {
            buttonSytle = ['ResponsePageNavigation__buttons']
        }

        numberOfPages.push(
            <div 
                className={buttonSytle.join(' ')}
                onClick={() => props.clicked(i)}
                key={i}>{i}</div>
        )
    }
    
    return (
        <div className='ResponsePageNavigation__container'>
            {numberOfPages}
        </div>
    )
}

export default responsePageNavigation;