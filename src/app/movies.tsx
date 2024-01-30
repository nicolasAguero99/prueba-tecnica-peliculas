'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { shallow } from 'zustand/shallow'
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'

import { useForm } from 'react-hook-form'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

// Store
import { useMovieStore } from '@/store/movieStore'

// Constants
import { API_IMAGE_URL } from '@/constants/constants'

// Api
import { getMovies } from '@/app/api/movies'

// Types
import { type Movie } from '@/types/types'

// Components
import FormSearch from '@/components/form-search'
import CardMovie from '@/components/card-movie'


export default function Movies(): JSX.Element {
  const router = useRouter()
  const {ref, inView} = useInView()
  const [showContent, setShowContent] = useState(false)
  const { inputSearch } = useMovieStore((state) => ({inputSearch: state.inputSearch}), shallow)
  const { setSelectedMovie } = useMovieStore()

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView])

  const handleSelectedMovie = (movie: Movie) => {
    router.push(`/movie/${movie.id}`)
    setSelectedMovie(movie)
  }

  const { data: allMoviesInfo, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['movies', inputSearch],
    queryFn: ({ pageParam = 1 }) => getMovies(inputSearch, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1
      } else {
        return undefined
      }
    }
  })
  
  const listMovies: Movie[] = useMemo(() => {
    return allMoviesInfo?.pages.reduce((acc, page) => {
      return [...acc, ...page.results];
    }, []);
  }, [allMoviesInfo])

  return (
    <section className='absolute top-0 left-0 right-0 m-auto z-40'>
      <div className='max-w-[800px] m-auto'>
        <FormSearch showContent={showContent} setShowContent={setShowContent} />
        <div className={`${showContent ? '' : 'hidden'} relative grid custom-container-card gap-y-4 my-6 h-[88vh] overflow-y-auto z-40 pb-40`}>
          {
            listMovies?.length < 1 
              ? <p>Loading...</p>
              : listMovies?.map((movie) => {
              const {id, title, poster_path, release_date, vote_average} = movie
              const date = release_date.split('-')[0]
              const votes = (vote_average * 10).toFixed(0)
              return (
                <CardMovie key={id} movie={movie} handleSelectedMovie={handleSelectedMovie} />
              )
            })
          }
          {
            hasNextPage && <span ref={ref} className='m-auto w-full' >...</span>
          }
        </div>
      </div>
    </section>
  )
}

