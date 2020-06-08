import Axios from 'axios';

const endPoint = (section, page, query) => {
  return query !== undefined
    ? `https://api.themoviedb.org/3/search/movie?api_key=c3c35f23bf915c301df7997071bdd291&language=en-US&query=${query}&page=${page}`
    : `https://api.themoviedb.org/3/movie/${section}?api_key=c3c35f23bf915c301df7997071bdd291&language=en-US&page=${page}`;
};

export async function GetMoviesSection(sectionName, pagee, slice, query) {
  const {
    data: { page },
    data: { total_pages },
    data: { results },
  } = query ? await Axios.get(endPoint(sectionName, pagee, query)) : await Axios.get(endPoint(sectionName, pagee));

  const result = slice ? (slice !== '' ? results.slice(0, slice) : results) : results;
  return { result, total_pages, page };
}
