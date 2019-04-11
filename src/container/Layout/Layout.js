import React, { Component } from 'react';

import FormBlock from '../../container/UserData/FormBlock';
import FilmBase from '../FilmBase/FilmBase';
import ZoomFilm from '../../component/ZoomPositon/ZoomPosition';
// import DataGetter from '../Datagetter/DataGetter';



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
    //    getData = () => {
    //        let response = DataGetter.getMovieData(this.state.title);
    //        console.log(response)
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
        // console.log(DataGetter.moviesBase, 'render')
        return (
            <div>
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