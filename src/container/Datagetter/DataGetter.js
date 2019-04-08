import axios from 'axios';


const config = {
    headers: {
        'X-RapidAPI-Key': '4b2796f64emsh1fba38a60c9c0d5p174064jsn3a16fa3fa413',
    }
}

let moviesBase = {};
const getMovieData = (title) => {
    axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${title}`, config)
        .then(response => {
            moviesBase = response
            console.log(response)
            return moviesBase;
        })
        .catch(e => console.log(e))
};

export default {
    getMovieData,
    moviesBase
}