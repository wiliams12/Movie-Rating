async function callAPI(API: string, url: string) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${API}` 
    }
  });

  if (!response.ok) {
    throw new Error(`TMDB API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function discoverMovies(API: string, keyword: string) {
  const params = new URLSearchParams({
    query: keyword,
    include_adult: 'false',
    page: '1',
  });

  const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;

  const data = await callAPI(API, url);

  const filteredData = data.results.filter((movie: any) => movie.vote_count > 5);

  const sortedMovies = filteredData.sort((a: any, b: any) => {
    if (!a.vote_count) return 1;
    if (!b.vote_count) return -1;

    return b.vote_count - a.vote_count;
  });

  return sortedMovies;
}

export async function GetMovieDetails(API: string, id: string) {
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}`;
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits`

  const movieData = await callAPI(API, movieUrl);
  const castData = await callAPI(API, castUrl);

  const sortedCast = castData.cast.sort((a: any, b: any) => {
    if (!a.popularity) return 1;
    if (!b.popularity) return -1;

    return b.vote_count - a.vote_count;
  }).slice(0, 20);

  const sortedCrew = castData.crew.sort((a: any, b: any) => {
    if (!a.popularity) return 1;
    if (!b.popularity) return -1;

    return b.vote_count - a.vote_count;
  }).slice(0, 20);

  const formattedCrew = sortedCrew.map((person: any) => ({
    id: person.id,
    gender: person.gender,
    name: person.name,
    job: person.job,
    character: null,
    photo: person.profile_path,
  }));

  const formattedCast = sortedCast.map((person: any) => ({
    id: person.id,
    gender: person.gender,
    name: person.name,
    job: "Actor",
    character: person.character,
    photo: person.profile_path,
  }));

  movieData.crew = formattedCrew
  movieData.cast = formattedCast;

  return movieData;
}

export async function getImageConfiguration(API: string) {
  const url = 'https://api.themoviedb.org/3/configuration';

  const data = await callAPI(API, url);

  return data.images; 
}

