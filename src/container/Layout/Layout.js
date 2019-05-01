import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../component/Header/Header';
import FormBlock from '../../container/UserData/FormBlock';
import FilmBase from '../FilmBase/FilmBase';
import ZoomFilm from '../../component/ZoomPositon/ZoomPosition';

class Layout extends Component {

    state = {
        title: null,
        type: null,
        zoomFilm: null,
        showMoviesData: false,
        apiKey: null
    };

    componentWillMount () {
        this.downloadApiKey()
    }

    setApiKey = key => {
        this.setState({
            apiKey: key
        })
    }
    downloadApiKey = () => {
        axios.get('https://cors-anywhere.herokuapp.com/'+'https://apikeys-5e3d9.firebaseio.com/filmBase.json')
        .then( res => this.setApiKey(res.data))
    }
    
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

    newSearchingHandler = () => {
        this.setState({
            title: null,
            type: null,
            zoomFilm: null,
            showMoviesData: false
        })
    }

    render () {
        return (
            <div style={{'minHeight':'94vh', 'margin': '0','padding': '5px','boxSizing': 'border-box'}}>
                <Header 
                    active={this.state.apiKey !== null}/>
                <FormBlock 
                    disableButton={this.state.apiKey === null ? true : false}
                    onNewSearching={this.newSearchingHandler}
                    displayMovies={this.state.title !== null || this.state.type !== null}
                    searchMovies={this.getMovieData}
                    title={this.state.title} />
                <FilmBase 
                    apiKey={this.state.apiKey}
                    onZoomFilmData={this.zoomFilmDataHandler}
                    show={this.state.title !== null || this.state.type !== null}
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