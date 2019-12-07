import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

const Home = () => <Query query={HOME_PAGE}>
    {({loading, data, error}) => {
        if(loading) return "loading";
        if(error) return "something happend";
        return data.movies.map(movie => (
            <Movie 
                id={movie.id}
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
            ></Movie>
        ));
    }}
    </Query>;

export default Home;
