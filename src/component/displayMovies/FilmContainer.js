import React from 'react';

import SingleFilmBlock from './SingleFilmBlock';

const filmContainer = props => {
    const films = props.filmBase.map( (movie, i) => {
        return (
            <SingleFilmBlock 
                key={i}
                title={movie.Title}
                type={props.type}
                year={movie.Year} 
                poster={movie.Poster}
                id={movie.imdbID}/>
        )
    })
    return <div>{films}</div>
}

export default filmContainer;