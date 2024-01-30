import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Types
import { Movie, type MovieStateContext } from '@/types/types'

export const useMovieStore = create<MovieStateContext>()(persist((set) => ({
  movies: [],
  inputSearch: '',
  selectedMovie: {} as Movie,
  setMovies: (movies) => set({ movies }),
  setValueInputSearch: (inputSearch) => set({ inputSearch }),
  setSelectedMovie: (selectedMovie) => set({ selectedMovie })
}), { name: 'movie-store' }))
