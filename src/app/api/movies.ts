// Constants
import { API_POPULAR_URL, API_TRENDING_URL, API_URL, OPTIONS_API, API_TOP_RATED_URL } from '@/constants/constants'

// Types
import { MovieTypes } from '@/types/types.d'

export async function getMovies (movie: string, page: number = 1) {
  const api = await fetch(`${API_URL}query=${movie}&include_adult=false&language=en-US&page=${page}`, OPTIONS_API)
  const res = await api.json()
  const data = await res
  return data
}

export async function getTrendingMovies (type: MovieTypes) {
  let url = ''
  if (type === MovieTypes.TRENDING) {
    url = API_TRENDING_URL
  } else if (type === MovieTypes.POPULAR) {
    url = API_POPULAR_URL
  } else if (type === MovieTypes.TOP_RATED) {
    url = API_TOP_RATED_URL
  } else {
    url = '' 
  }
  const api = await fetch(`${url}`, OPTIONS_API)
  const res = await api.json()
  const data = await res.results
  return data
}
