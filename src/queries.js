import gql from "graphql-tag";

const HOME_PAGE = gql`
  {
    movies(limit:5, rating:7){
      id
      title
      genres
      rating
    }
  }
`

export default HOME_PAGE;