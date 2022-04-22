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

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      username
      email
      password
      role
    }
  }
`

const MY_ORDERS = gql`
  query MyOrders {
    myOrders {
      id
      orderedBy {
        username
      }
      quality
      screeningDay
      screeningTime
      location {
        username
      }
      toWatch {
        title
        year
      }
    }
  }
`

const SESSION_CHECK = gql`
  query session(
    $movieId: ID!
    $locationId: ID!
    $quality: String!
    $screeningTime: String!
    $screeningDay: Date!
  ) {
    session(
      movieId: $movieId
      locationId: $locationId
      quality: $quality
      screeningTime: $screeningTime
      screeningDay: $screeningDay
    ) {
      id
      location {
        username
        id
      }
      movie {
        title
        id
      }
      screeningDay
      screeningTime
      quality
      seatsAvailable
      seatMap
    }
  }
`

const RETRIEVE_INTENT = gql`
  query Query {
    paymentIntent {
      amount
      currency
      payment_method_types
    }
  }
`

export {
  CURRENT_USER,
  GET_MOVIES,
  GET_MOVIE,
  GET_THEATERS,
  GET_LOCATIONS,
  GET_CATALOG,
  MY_ORDERS,
  RETRIEVE_INTENT,
  SESSION_CHECK,
}
