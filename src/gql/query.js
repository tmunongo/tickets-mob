import { gql } from '@apollo/client'

const GET_MOVIES = gql`
  query MovieFeed {
    MovieFeed {
      movies {
        id
        title
        year
        poster
        synopsis
        rating
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
      synopsis
      rating
      submittedBy {
        username
        id
      }
      showingAt {
        id
        username
      }
      showingAtCount
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
      fullName
      phoneNumber
      address
      catalogue {
        id
        title
        year
        poster
        synopsis
        rating
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
      fullName
      phoneNumber
      address
      catalogue {
        id
        title
        year
        poster
        synopsis
        rating
      }
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
      synopsis
      rating
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
      fullName
      address
      reservationsMade {
        id
        reservedBy {
          username
          email
        }
        seat
        totalPrice
        confirmationCode
        sessionDetails {
          location {
            fullName
            address
            phoneNumber
          }
          screeningDay
          screeningTime
          quality
          movie {
            title
            year
            id
            rating
            synopsis
          }
        }
      }
      ordersMade {
        id
        toWatch {
          id
          title
          year
          poster
          synopsis
        }
        location {
          email
          fullName
          address
          phoneNumber
        }
        screeningTime
        screeningDay
        quality
        orderedBy {
          username
          email
          fullName
          phoneNumber
        }
      }
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
        fullName
        address
      }
      toWatch {
        title
        year
        rating
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
        fullName
        address
      }
      movie {
        title
        id
        year
        rating
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
