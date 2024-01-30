import { type OptionsApi } from '@/types/types'
export const API_URL: string = 'https://api.themoviedb.org/3/search/movie?'
export const API_TRENDING_URL: string = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
export const API_POPULAR_URL: string = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const API_TOP_RATED_URL: string = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
export const API_IMAGE_URL: string = 'https://image.tmdb.org/t/p/w200'
export const API_IMAGE_MAIN_URL: string = 'https://image.tmdb.org/t/p/w300'
export const API_IMAGE_HERO_URL: string = 'https://image.tmdb.org/t/p/w500'

export const OPTIONS_API: OptionsApi = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODZiYTFlM2I2YWQ1NzA0MDU4NGU0NmI1YzZjZmMwMiIsInN1YiI6IjY1YjgxNzYxM2Q3NDU0MDE2MzdlZGJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hgzb3zrdIKzRKRp6WoRS6rkGyFbUjIb8qA0b6ZhgIFc'
  }
}
