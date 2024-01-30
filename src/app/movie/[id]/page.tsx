'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { shallow } from 'zustand/shallow'

// Store
import { useMovieStore } from '@/store/movieStore'
import { API_IMAGE_HERO_URL } from '@/constants/constants'

export default function SelectedMovie ({ params }: { params: { id: string } }): JSX.Element {
  const { id } = params
  const { selectedMovie } = useMovieStore((state) => ({
    selectedMovie: state.selectedMovie
  }), shallow)

  const { title, poster_path, overview, vote_average, original_language, release_date } = selectedMovie
  const date = release_date.split('-')[0] ?? 'No date'
  const votes = (vote_average * 10).toFixed(0) ?? 'No votes'

  return (
    <main className='my-8'>
      <h1 className='text-3xl mb-14'>Selected Movie: <strong>{title}</strong></h1>
      <Card className='flex max-md:flex-col gap-6 items-center bg-transparent border-none shadow-none text-white m-auto'>
        <CardHeader className='p-0 me-4'>
          {
            !poster_path 
              ? <img className='w-auto h-[500px] object-cover' src='https://via.placeholder.com/180x250' alt={title} />
              : <img className='w-[500px] h-[500px] object-cover rounded-md' src={`${API_IMAGE_HERO_URL}${poster_path}`} alt={title} />
          }
        </CardHeader>
        <CardContent className='flex flex-col gap-6 w-fit'>
          <CardTitle className='font-semibold text-6xl w-fit'>{title ?? 'No title'}</CardTitle>
          <CardDescription className='w-[90%] text-lg text-white/60'>{overview ?? 'No description'}</CardDescription>
          <CardFooter className='flex flex-col gap-8 w-fit text-lg p-0 items-start'>
            <small>Year: {date}</small>
            <small>Approval: {votes}%</small>
            <small className='capitalize'>Language: {original_language ?? 'No language'}</small>
          </CardFooter>
        </CardContent>
      </Card>
    </main>
  )
}
