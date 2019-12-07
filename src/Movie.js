import React from "react";
import { Link } from "react-router-dom";

const Movie = ({id, key, title, rating}) => {
    return (
    <Link to={`/details/${id}/`}>
        <h2>
            {title} / {rating}
        </h2>
    </Link>
    
    )
}

export default Movie;