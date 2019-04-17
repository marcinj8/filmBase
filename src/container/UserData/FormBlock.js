import React, { Component } from 'react';

import Form from '../../component/form/Form'

class FormBlock extends Component {

    state = {
        input: '',
        type: 'movie',
        disableButton: true
    };

    onInputChangeHandler = e => {
        this.setState({
            input: e.target.value,
            disableButton: e.target.value.length >= 1 ? false : true
        })
    };

    onCheckBoxChangeHandler = e => [
        this.setState({
            type: e.target.value
        })
    ]

    render() {
        return (
            <Form 
                disableButton={this.state.disableButton}
                displayMovies={this.props.displayMovies}
                title={this.state.title}
                inputChange={this.onInputChangeHandler}
                selectChange={this.onCheckBoxChangeHandler}
                clicked={() => this.props.searchMovies(this.state.input, this.state.type)}/>
        )
    }
}

export default FormBlock;