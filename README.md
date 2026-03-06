# A movie rating application

reflection on the movies you had seen

## Technologies

- React.js
- Node.js

## Motivation

## Functionality

- stores the average user ratings and calculates your difference from the average (but dont show it ?)

- toggle list and grid views

## Specs

### Search

- the script fetches 20 movies from the TMDB API
- filters out everything with less then 500 votes to exclude the most irrelevant results
- sorts according to the vote count (popularity was also an option, but it didn't yield as good results)

## How to use

- Get your API key and store it in an .env file in the src/backend folder
