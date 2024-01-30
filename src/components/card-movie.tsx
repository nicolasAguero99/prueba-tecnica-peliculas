import { Card, CardTitle, CardContent } from './ui/card'

// Constants
import { API_IMAGE_URL } from '@/constants/constants'

// Types
import { type Movie } from '@/types/types'

export default function CardMovie ({ movie, handleSelectedMovie }: { movie: Movie, handleSelectedMovie: (movie: Movie) => void }) {
  const {id, title, poster_path, release_date, vote_average, original_language} = movie
  const date = release_date.split('-')[0]
  const votes = (vote_average * 10).toFixed(0)

  return (
    <Card onClick={() => { handleSelectedMovie(movie) }} className='relative cursor-pointer border-none h-fit mx-4 shadow-none'>
      {
        !poster_path 
          ? <img className='w-full h-[300px] object-cover rounded-lg' src='https://via.placeholder.com/180x250' alt={title} />
          : <img className='w-full h-[300px] object-cover rounded-lg' src={`${API_IMAGE_URL}${poster_path}`} alt={title} />
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