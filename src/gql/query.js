import { gql } from '@apollo/client'

const GET_MOVIES = gql`
  query MovieFeed {
    MovieFeed {
      movies {
        id
        title
        year
        poster
        submittedBy {
          id
          username
        }
        showingAt {
          id
          username
        }
        showingAtCount
        reviews {
          id
          content
          stars
        }
        orderedTickets {
          id
          orderedBy {
            id
            username
          }
        }
      }
    }
  }
`

const GET_MOVIE = gql`
  query Movie($movieId: ID!) {
    movie(id: $movieId) {
      id
      title
      year
      poster
      submittedBy {
        username
        id
      }
      showingAt {
        id
        username
      }
      showingAtCount
      reviews {
        content
        stars
        author {
          id
          username
        }
        id
      }
      orderedTickets {
        id
        orderedBy {
          id
          username
        }
        location {
          id
          username
        }
        quality
        screeningDay
        screeningTime
      }
    }
  }
`

const GET_THEATERS = gql`
  query Theaters {
    theaters {
      username
      id
      email
      role
      catalogue {
        id
      }
      myOrders {
        id
      }
    }
  }
`

const GET_LOCATIONS = gql`
  query Locations($movieId: ID!) {
    locations(movieId: $movieId) {
      username
      id
    }
  }
`

const GET_CATALOG = gql`
  query Catalog($theaterId: ID!) {
    catalog(theaterId: $theaterId) {
      id
      title
      year
      poster
    }
  }
`

export { GET_MOVIES, GET_MOVIE, GET_THEATERS, GET_LOCATIONS, GET_CATALOG }
