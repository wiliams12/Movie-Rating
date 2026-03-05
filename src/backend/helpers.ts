export async function discoverMovies(apiToken: string, keyword: string) {
  const params = new URLSearchParams({
    query: keyword,
    include_adult: 'true',
    page: '1',
  });

  const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiToken}` 
    }
  });

  if (!response.ok) {
    throw new Error(`TMDB API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  const sortedMovies = data.results.sort((a: any, b: any) => {
    if (!a.popularity) return 1;
    if (!b.popularity) return -1;

    return b.popularity - a.popularity;
  });

  data.results = sortedMovies;

  return data;
}

export async function GetMovieDetails(apiToken: string, id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiToken}` 
    }
  })

  if (!response.ok) {
    throw new Error(`TMDB API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return data;

}

export async function getGenreText(API: string) {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US';

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${API}` 
    }
  });

  if (!response.ok) {
    throw new Error(`TMDB Genre API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  return data.genres;
}

export async function getImageUrl(API: string) {

}