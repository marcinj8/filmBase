import React from 'react';

import SingleFilmBlock from './SingleFilmBlock';

import './FilmContainer.css'

const filmContainer = props => {
    const films = props.filmBase.map( (movie, i) => {
        return (
            <SingleFilmBlock
                clicked={()=> props.onZoomFilmData(movie)}
                key={i}
                title={movie.Title}
                type={props.type}
                year={movie.Year} 
                poster={movie.Poster}
                id={movie.imdbID}/>
        )
    })
    return <div className='FilmContainer__container'>{films}</div>
}

export default filmContainer;