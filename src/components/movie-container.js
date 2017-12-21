import React, {Component} from 'react';
import axios from 'axios';
import Movie from './movie';

class MovieContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        const BASE_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(`${BASE_URL}`).then((resp) => {

            this.setState({
                movies: resp.data.feed.entry
            })
        });
    }

    render(){
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie key={index} info={movieInfo}/>;
        });

        return(
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;