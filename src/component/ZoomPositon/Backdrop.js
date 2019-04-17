import React from 'react';

import './Backdrop.css'

const backdrop = props => {
    let backdropStyle = props.show ? 'Backdrop__container' : {'display':'none'};

    return (
        <div 
            onClick={props.clicked}
            className={backdropStyle}>
            {props.children}
        </div>
    )
    }

export default backdrop;