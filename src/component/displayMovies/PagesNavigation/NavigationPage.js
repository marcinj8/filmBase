import React from 'react';

import './NavigationPage.css';

const navigationPage = props => {
    return (
        <div 
            className={props.buttonStyle}
            onClick={() => props.clicked(props.changeNo)}
            key={props.page}>
            {props.sign}
        </div>
        )
}

export default navigationPage;