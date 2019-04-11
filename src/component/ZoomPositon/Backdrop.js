import React from 'react';

import './Backdrop.css'

const backdrop = props => {
    let backdropStyle = {'display':'none'};
    if(props.show) {
        backdropStyle = 'Backdrop__container';
    };

    return (
        <div 
            onClick={props.clicked}
            className={backdropStyle}>
            {props.children}
        </div>
    )
    }

export default backdrop;