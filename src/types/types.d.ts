export interface MovieStateContext {
  movies: Movie[]
  inputSearch: string
  selectedMovie: Movie
  setMovies: (movies: Movie[]) => void
  setValueInputSearch: (inputSearch: string) => void
  setSelectedMovie: (selectedMovie: Movie) => void
}

export interface OptionsApi {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers: {
    accept: 'application/json'
    Authorization: `Bearer ${string}`
  }
}

export enum MovieTypes {
  TRENDING = 'trending',
  POPULAR = 'popular',
  TOP_RATED = 'top-rated'
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
