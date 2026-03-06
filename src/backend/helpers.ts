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
  const url = `https://api.themoviedb.org/3/movie/${id}`;

  return callAPI(API, url);

}

export async function getGenreText(API: string) {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US';

  const data = await callAPI(API, url);

  return data.genres;
}

export async function getImageConfiguration(API: string) {
  const url = 'https://api.themoviedb.org/3/configuration';

  const data = await callAPI(API, url);

  return data.images; 
}

