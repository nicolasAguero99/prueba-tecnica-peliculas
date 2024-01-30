'use client'

import { Card, CardTitle, CardContent } from './ui/card'
import { useRouter } from 'next/navigation'

// Constants
import { API_IMAGE_MAIN_URL } from '@/constants/constants'

// Store
import { useMovieStore } from '@/store/movieStore'

// Types
import { type Movie } from '@/types/types'

export default function CardMovieMain ({ movie }: { movie: Movie }) {
  const {id, title, poster_path, release_date, vote_average } = movie
  const router = useRouter()
  const { setSelectedMovie } = useMovieStore()
  const date = release_date.split('-')[0]
  const votes = (vote_average * 10).toFixed(0)

  const handleSelectedMovie = () => {
    router.push(`/movie/${id}`)
    setSelectedMovie(movie)
  }

  return (
    <Card onClick={handleSelectedMovie} className='relative cursor-pointer border-none h-fit shadow-none'>
      {
        !poster_path 
          ? <img className='w-full h-[400px] object-cover rounded-lg' src='https://via.placeholder.com/200x300' alt={title} />
          : <img className='w-full h-[400px] object-cover rounded-lg' src={`${API_IMAGE_MAIN_URL}${poster_path}`} alt={title} />
      }
      <div className='absolute bottom-0 flex w-full'>
        <div className='absolute bottom-0 bg-gradient-to-t from-black to-black/40 w-full h-[90px] rounded-b-lg z-10'></div>
        <div className='flex flex-col gap-2 z-20 py-4 w-full px-4 '>
          <CardTitle className='text-white text-base text-nowrap text-ellipsis overflow-x-hidden'>{title}</CardTitle>
          <div className='flex justify-between items-center text-white/80 text-sm'>
            <CardContent className='p-0 m-0'>{date}</CardContent>
            <CardContent className='p-0 m-0'>{votes}%</CardContent>
          </div>
        </div>
      </div>
    </Card>
  )
}