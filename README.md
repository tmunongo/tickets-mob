# Tickets! Please Movie Tickets

## Screenshots
!["home page"](live/home_page.gif)

## API
[Backend](https://github.com/edtha3rd/tickets-api)

## Contents

- [Features](#Features)
- [Technologies](#Technologies)
- [Concepts](#Variables)
- [How to use](#How-to-use)
- [Required Variables](#Variables)

## Features

This mobile app allows a user to register an account and view all the available movies in the database. A user can customize their reservation by picking a location, watch time, and day. The user can also pick a seat. The user can make a payment using the Stripe API.

### Components
- Authentication
  - Users can register for an account or login to an existing account
  - Custom authentication flow:
    - Password hashing and salting using bcrypt
    - JSON Web tokens for user verification
  - Users can only buy tickets through the mobile app.
- Ticket Ordering Flow
  - Movies are added to the database by an administrator through the admin portal [Link](https://github.com/edtha3rd/tickets-admin)
  - A Theater User can add a movie to their catalog, allowing users to order a ticket for this movie from their location(s).
  - The user selects a movie from the mobile UI, then they select a location from the available locations.
  - A user can also select a location first, then see movies available at the location.
  - The user must pick a day, time, and quality.
    - The movie, location, day, time, and quality are the elements that distinguish between different 'sessions'.
  - If the session exists, the user will view its current state including the number of selected seats or a new, empty session will be generated allowing the user to pick their seat.
  - A user can select a maximum of 2 seats that have not been previously selected. The total cost is shown. [Screenshot](live/ordering.jpg)
  - The user can proceed to pay by inputting their card details. Payment is handled by the Stripe API.
  - Once payment is approved, the user's reservation is recorded in the database, and they are presented with a unique verification number that can be used to check their ticket on arrival.
- Other Features
  - A user can see their previous reservations.
  - A sticker shows whether the reservation is still valid or not depending on whether the date has passed.

## Technologies
**Frontend**
- React Native.
- React Navigation (routing).
- React Context (handle app state).
- GraphQL (API requests).
- Stripe API (payment).
- RN Stylesheets

## Concepts
- Model, View, Controller (MVC).
- Authentication and Authorization.
- CRUD.
- Password encryption.

## UML Diagram

## 🚀 How to use
**Must also have [server](https://github.com/edtha3rd/tickets-api) running.**
- Download the .zip file or clone repository.
- cd to tickets-mob.
- `npm install` to install packages.
- Run `expo start` to run the app.

## Variables
- API_URI: `http://${localhost}:8080/tickets-api`. **to run on a mobile device, replace localhost with the host machine IP**
- STRIPE_PUBLISHABLE_KEY.
