import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit:5, rating:7){
      id
      title
      genres
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!){
      movie(id: $movieId){
          title
          rating
          description_intro
          medium_cover_image
          language
          genres
      }
      suggestions(id: $movieId){
        medium_cover_image
        title
        rating
      }
  }
`;