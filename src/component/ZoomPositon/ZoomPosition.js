import React from 'react';

import Backdrop from './Backdrop.js';
import SingleFilmBlock from '../displayMovies/SingleFilmBlock';

const ZoomPosition = props => {
    
    let zoomPosition = null;
    
    let zoomPositionStyle = ['ZoomPositon__container']
    if(props.showMoviesData === true) {
        zoomPositionStyle = ['ZoomPositon__container', 'ZoomPositon__container--activate']
    }
    else if (props.showMoviesData === false){
        zoomPositionStyle = ['ZoomPositon__container', 'ZoomPositon__container--deactivate']
    }

    if(props.movie){
        zoomPosition = (
            <Backdrop 
                show={props.showMoviesData}
                clicked={props.oncloseZoomFilmData}>
                <SingleFilmBlock 
                    style={zoomPositionStyle}
                    clicked={props.oncloseZoomFilmData}
                    key={props.movie.Title}
                    title={props.movie.Title}
                    type={props.movie.type}
                    year={props.movie.Year} 
                    poster={props.movie.Poster}
                    id={props.movie.imdbID}/>
            </Backdrop>
        )
    } 
 
    return zoomPosition
}

export default ZoomPosition;