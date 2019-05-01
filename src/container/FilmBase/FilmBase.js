import React, { Component } from 'react';
import axios from 'axios';

import FilmContainer from '../../component/displayMovies/FilmContainer';
import ResponsePageNavigation from '../../component/displayMovies/ResponsePageNavigation';

import './FilmBase.css';
import redCourtain from '../../img/5a1bb95205ea94.6786220615117663540242.png'

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
        navigationStyle: ['FilmBase__navigation'],
        config: {
            headers: {
                'X-RapidAPI-Key':null,
            }
          }
    };

    componentDidUpdate () {
        if(this.state.config.headers['X-RapidAPI-Key'] === null && this.state.config.headers['X-RapidAPI-Key'] !== this.props.apiKey ) {
            const updateConfig = {...this.state.config};
            let updateHeaders = {...updateConfig.headers};
            updateHeaders = {'X-RapidAPI-Key': this.props.apiKey};
            updateConfig.headers = updateHeaders;

            this.setState({
                config: updateConfig
            })
        }
        
        if(!this.props.show && this.state.navigationStyle.length === 2) {
            this.setState({
                navigationStyle: ['FilmBase__navigation']
            })
        }

        if(!this.props.show && this.state.page !== 1) {
            this.setState({
                page: 1
            })
        }

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
    
    setFilmsInBase = (response) => {
        this.setState({
            filmBase: response.data.Search,
            results: response.data.totalResults,
            numberOfPages: Math.ceil(response.data.totalResults/10),
            loading: false
        })
    }

    errorHandler = () => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    getData = (page=this.state.page) => {
        this.loading()
        axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&type=${this.props.type}&s=${this.props.title}`, this.state.config)
        .then( response => this.setFilmsInBase(response))
        .catch( () => this.errorHandler())
    };

    onChangePageHandler = page => {
        if(this.state.page === page || page < 1 || page > this.state.numberOfPages){
            return
        }
        this.setState({
            page: page
        })
        this.getData(page);
    }

    render() {
        let responsePageNavigation = [0];
        let redCourtainStyle = ['FilmBase__img'];

        if(!this.props.title) {
            redCourtainStyle = ['FilmBase__img', 'FilmBase__img--closed'];
        }
        
        if(this.state.numberOfPages) {
            responsePageNavigation = (
                <ResponsePageNavigation 
                    numberOfPages={this.state.numberOfPages}
                    currentPage={this.state.page}
                    onChangePage={this.onChangePageHandler}/>
            )
        }
        let filmBase = <p className='Filmbase__message'>Please write title</p>

        if(this.state.error) {
            redCourtainStyle = ['FilmBase__img', 'FilmBase__img--closed'];
            filmBase = <p className='Filmbase__message'>something went wrong</p>
        }
        
        if(this.state.filmBase && this.props.title) {
            redCourtainStyle = ['FilmBase__img', 'FilmBase__img--open'];
            if(this.state.navigationStyle.length < 2) {
                setTimeout( () => {
                    this.setState({
                        navigationStyle: ['FilmBase__navigation', 'FilmBase__navigation--show']
                    })
                }
                , 500);
            }

            filmBase = (
                <FilmContainer
                    onZoomFilmData={this.props.onZoomFilmData}
                    filmBase = {this.state.filmBase} 
                    type={this.state.type}/>
            )
        }

        

        if(this.state.loading) {
            redCourtainStyle = ['FilmBase__img', 'FilmBase__img--loading'];
            filmBase = <p>Loading...</p>
        }

        const title = (
            this.state.searched && this.state.filmBase && this.state.results
            ? <h3>Searched phrase: {this.state.searched}, found: {this.state.results} positons.</h3>
            : null
        )
        
        return (
            <div style={{'height': '100%'}}>
                <div className={this.state.navigationStyle.join(' ')}>
                    {title}
                    {responsePageNavigation}
                </div>
                <div className='FilmBase__container'>
                    <img className={redCourtainStyle.join(' ')} src={redCourtain} alt="" />
                    {filmBase}
                </div>
            </div>
        )
    };

};

export default FilmBase