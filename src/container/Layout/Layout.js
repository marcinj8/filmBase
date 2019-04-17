import React, { Component } from 'react';

import Header from '../../component/Header/Header';
import FormBlock from '../../container/UserData/FormBlock';
import FilmBase from '../FilmBase/FilmBase';
import ZoomFilm from '../../component/ZoomPositon/ZoomPosition';

class Layout extends Component {

    state = {
        title: null,
        type: null,
        zoomFilm: null,
        showMoviesData: false
    };
    
    getMovieData = (title, type) =>{
        this.setState({
            title: title,
            type: type
        })
    }

    zoomFilmDataHandler = movie => {
        this.setState({
            zoomFilm: movie,
            showMoviesData: true
        });
    }

    closeZoomFilmDataHandler = () => {
        this.setState({showMoviesData: false});
    }

    render () {
        return (
            <div style={{'minHeight':'94vh', 'margin': '0','padding': '5px','boxSizing': 'border-box'}}>
                <Header />
                <FormBlock 
                    displayMovies={this.state.title !== null || this.state.type !== null}
                    searchMovies={this.getMovieData}
                    title={this.state.title} />
                <FilmBase 
                    onZoomFilmData={this.zoomFilmDataHandler}
                    title={this.state.title}
                    type={this.state.type}/>
                <ZoomFilm 
                    showMoviesData={this.state.showMoviesData}
                    oncloseZoomFilmData={this.closeZoomFilmDataHandler}
                    movie={this.state.zoomFilm}/>
            </div>
        )
    }


}

export default Layout;