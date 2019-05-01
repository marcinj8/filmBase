import React from 'react';

import './Header.css'

const header = props => {
return (
        <div className='Header__container'>
           {
            props.active 
            ? <h1 className='Header__title'>
                    <span className='Header__titleFirstWord'> Film </span> searcher
                </h1>
            : <h1 className='Header__title'>Loading base...</h1>
            }
        </div>
        
    )
}
   

export default header;