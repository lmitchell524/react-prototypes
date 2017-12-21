import React, {Component} from 'react';
import MovieContainer from './movie-container';
import Movie from './movie';

export default () => {
    return(
        <div className="container">
            <h1 className="text-center title">Top 10 Movies</h1>
            <MovieContainer/>
        </div>
    )
}



