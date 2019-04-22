import React from 'react';

import './Form.css';

const form = props => {
    
    let formStyle = ['Form__container'];
    if(props.displayMovies){
        formStyle.push('Form__container--displayMovies');
    } else {
        formStyle.push('Form__container--start');
    }
    const buttonStyle = ['Form__btn',
        props.disableButton
        ?'Form__btn--disabled'
        :'Form__btn--enabled'
        ]

        let formBlockContent = (
            <p>
                <input 
                    className='Form__input'
                    type="text" 
                    name="title" 
                    value={props.title} 
                    placeholder='enter title'
                    onChange={props.inputChange}/>
                <select
                    className='Form__input'
                    onChange={props.selectChange} >
                    <option defaultValue value='movie'>movie</option>
                    <option value='series'>series</option>
                    <option value='episode'>episode</option>
                </select>
                <button 
                    className={buttonStyle.join(' ')}
                    disabled={props.disableButton}
                    onClick={props.clicked}>Search</button>
            </p>
        )
        if(props.displayMovies) {
            formBlockContent = (
                <button 
                    className='Form__btn--newSearching' 
                    onClick={props.clickedNewSearching}
                    type="">New searching</button>
            )
        }
    return (
        <div className={formStyle.join(' ')}>
            {formBlockContent}
        </div>
    )
}

export default form;