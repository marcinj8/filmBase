import React, { Component } from 'react';

import FormBlock from '../../container/UserData/FormBlock';
import FilmBase from '../FilmBase/FilmBase';
// import DataGetter from '../Datagetter/DataGetter';



class Layout extends Component {

    state = {
        title: null,
        type: null
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

    render () {
        // console.log(DataGetter.moviesBase, 'render')
        return (
            <div>
                <FormBlock 
                    searchMovies={this.getMovieData}
                    title={this.state.title} />
                <FilmBase 
                    title={this.state.title}
                    type={this.state.type}/>
            </div>
        )
    }


}

export default Layout;