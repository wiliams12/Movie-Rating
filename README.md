# A movie rating application

reflection on the movies you had seen

## About

## Technologies

- indexedDB
- React.js
- Node.js

## Motivation

## Functionality

- stores the average user ratings and calculates your difference from the average

- toggle list and grid views

- Includes a test json so a person can test the app without getting his own API

## Specs

### Search

- the script fetches 20 movies from the TMDB API
- filters out everything with less then 500 votes to exclude the most irrelevant results
- sorts according to the vote count (popularity was also an option, but it didn't yield as good results)

- The actors and crew are only sorted because filtering out unknown ones would result in lesser-known movies, not having a single actor or a crew member

## How to use

- Get your API key and store it in an .env file in the src/backend folder
- Search has to be specific
  -> only the first results are retrieved and they are filtered and sorted only after retrieving the data, general queries lead to a lot of not well known results so the more relevant ones may not included

## Recommended browsers

- Not optimised for FireFox
- works on Safari, Edge, Chromium...
