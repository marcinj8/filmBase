import React from 'react';

import './SingleFilmBlock.css'

const singleFilmBlock = props => {
    let poster = <p>There is no poster</p>
    if(props.poster){
        poster = <img className='SingleFilmBlock__image' src={props.poster} alt=""/>
    };

    let singleFilmBlockStyle = props.style || ['SingleFilmBlock__container'];

    return (
        <div className={singleFilmBlockStyle.join(' ')}>
            <h2 onClick={props.clicked}>{props.title}</h2>
            {poster}
            <div>The {props.type} from {props.year}</div>
            <p>
                See <a target='blank' href={'https://www.imdb.com/title/' + props.id}> {props.title}</a> on IMDB
            </p>
        </div>
    )
};

export default singleFilmBlock;