import React, { Component } from 'react';
import axios from 'axios';

import FilmContainer from '../../component/displayMovies/FilmContainer';
import ResponsePageNavigation from '../../component/displayMovies/ResponsePageNavigation';

let config = {
    headers: {
        'X-RapidAPI-Key': '4b2796f64emsh1fba38a60c9c0d5p174064jsn3a16fa3fa413',
    }
  }

class FilmBase extends Component {
    state = {
        filmBase: null,
        searched: '',
        type: '',
        page: 1,
        results: null,
        loading: false,
        error: false,
        numberOfPages: null,
    };

    componentDidUpdate () {
        if((this.props.title && this.props.type ) && (this.state.searched !==this.props.title || this.state.type !== this.props.type)) {
            this.getData();
            this.setState({
                searched: this.props.title,
                type: this.props.type
            })
        }
    };

    loading = () => {
        this.setState({
            loading: true,
            error:false,
            errorMessage: ''
        })
    }

    getData = (page=this.state.page) => {
        this.loading()
        axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&type=${this.props.type}&s=${this.props.title}`, config)
        .then( response => {
             console.log(response);
             this.setState({
                 filmBase: response.data.Search,
                 results: response.data.totalResults,
                 numberOfPages: Math.ceil(response.data.totalResults/10),
                 loading: false
             })
        })
        .catch( () => {
            this.setState({
                error: true,
                loading: false,
            })
        })
    };

    onChangePageHandler = page => {
        if(this.state.page === page){
            return
        }
        this.setState({
            page: page
        })
        this.getData(page);
    }

    render() {
        let responsePageNavigation = [0]
        
        if(this.state.numberOfPages) {
            responsePageNavigation = (
                <ResponsePageNavigation 
                    numberOfPages={this.state.numberOfPages}
                    currentPage={this.state.page}
                    clicked={this.onChangePageHandler}/>
            )
        }
        let filmBase = <p>Please write title</p>

        if(this.state.error) {
            filmBase = <p>something went wrong</p>
        }
        
        if(this.state.filmBase) {
            filmBase = (
                <FilmContainer
                    onZoomFilmData={this.props.onZoomFilmData}
                    filmBase = {this.state.filmBase} 
                    type={this.state.type}/>
            )
        }

        if(this.state.loading) {
            filmBase = <p>Loading...</p>
        }

        const title = (
            this.state.searched && this.state.filmBase && this.state.results.length
            ? <h3>Searched phrase: {this.state.searched}, found: {this.state.results} positons.</h3>
            : null
        )
        
        return (
            <div>
                {title}
                {this.state.numberOfPages 
                    ? responsePageNavigation
                    : null}
                {filmBase}
            </div>
        )
    };

};

export default FilmBase