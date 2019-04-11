import React from 'react';

import './Form.css';

const form = props => {
    let formStyle = ['Form__container'];
    if(props.displayMovies){
        formStyle.push('Form__container--displayMovies');
    } else {
        formStyle.push('Form__container--start');
    }

    return (
        <div className={formStyle.join(' ')}>
            <input 
                type="text" 
                name="title" 
                value={props.title} 
                placeholder='enter title'
                onChange={props.inputChange}/>
            <select
                onChange={props.selectChange} >
                <option defaultValue value='movie'>movie</option>
                <option value='series'>series</option>
                <option value='episode'>episode</option>
            </select>
            <button onClick={props.clicked}>Search</button>
        </div>
    )
}

export default form;