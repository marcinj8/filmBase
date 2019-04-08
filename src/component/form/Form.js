import React from 'react';

const form = props => {
    return (
        <div>
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