# A movie rating application

reflection on the movies you had seen

## About

This app allows you to search and rate movies, and then display useful statistics and insights.
The rating system comes from an idea that not all movies are the same and that their overall "quality" cannot be described by one characteristic.
Of course there has to be a characteristic for quality, basicaly what everyone is used to when rating essentialy everything.
The distinction I made is that there is a second axis for every movie, you can image it as a plane.

### Example:

I will be using the rating from IMDB (17.3.2026).
_Harry Potter and the Deathly Hallows: Part 2_ has 8.1 stars, which is quite a lot.
This is only my personal opinion, but maybe even you might feel that it has some drawbacks, when watching the film, I always get the feelings that it is too fast-paced, that something in the screenplay is off.
Yet it has the same rating as many other films that I personallu consider masterpieces (you may not, but I hope that at least one of them makes you consider this theory): _Dead Poets Society_, _Million Dollar Baby_, _My Neighbor Totoro_, _Gran Torino_, _Ratatouille_, _Gone Girl_, _Jaws_, _The Deer Hunter_ or _Ben-Hur_, which had won 11 oscars.
Why I think that it has such a high rating is that even though the "quality" might be lover than the other films with same rating, it is more fun, nostalgic, epic... It is the grand finale of a series many people had grew up with.
And because everyone uses only one rating system, viewers unconsiously put these emotions into the singular rating.
But if we introduce other axis, we can now distinguish between more aspects of the movie. Giving justice to heartfelt flicks that deserve to have a better quality that some blockbusters.
This model that computes the overall "rating" so overall, those movies can still have better ratings, but the rooted "quality" rating won't disappear.

## How to use?

Search for a movie (beware that you won't be able to find movies by directors or actors).
Then you can rate ones you had seen, they will be stored on your homescreen.
You can display different statistics directly from there.

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

## Set-up

- Get your API key and store it in an .env file in the src/backend folder
- Search has to be specific
  -> only the first results are retrieved and they are filtered and sorted only after retrieving the data, general queries lead to a lot of not well known results so the more relevant ones may not included

## Recommended browsers

- Not optimised for FireFox
- works on Safari, Edge, Chromium...
