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
    include_adult: 'true',
    page: '1',
  });

  const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;

  const data = await callAPI(API, url);

  const sortedMovies = data.results.sort((a: any, b: any) => {
    if (!a.popularity) return 1;
    if (!b.popularity) return -1;

    return b.popularity - a.popularity;
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

// TODO: transfer to frontend
// maybe not necessary because details gives all the genres with strings
export function buildImageUrl(config: any, filePath: string | null, size: string = "normal", type: string) {
  if (!filePath || !config || !config.secure_base_url) {
    return null;
  }

  let size_w: string;

  switch (type) {
    case "backdrop":
      if (size == "large") {
        size_w = config.backdrop_sizes[2];
      } else if (size == "small") {
        size_w = config.backdrop_sizes[0];
      } else {
        size_w = config.backdrop_sizes[1];
      }
      break;
    case "poster":
      if (size === "large") {
        size_w = config.poster_sizes[5];
      } else if (size === "small") {
        size_w = config.poster_sizes[1];
      } else {
        size_w = config.poster_sizes[4];
      }
      break;

    case "logo":
      if (size === "large") {
        size_w = config.logo_sizes[5];
      } else if (size === "small") {
        size_w = config.logo_sizes[1];
      } else {
        size_w = config.logo_sizes[3];
      }
      break;

    default:
      size_w = "original";
  }

  return `${config.secure_base_url}${size}${filePath}`;
}