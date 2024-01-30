// Components
import MainMovies from '@/components/main-movies'

// Api
import { getTrendingMovies } from '@/app/api/movies'

// Types
import { MovieTypes, type Movie } from '@/types/types.d'

export default async function Main() {
  const moviesTrending: Movie[] = await getTrendingMovies(MovieTypes.POPULAR)
  const moviesPopular: Movie[] = await getTrendingMovies(MovieTypes.TRENDING)
  const moviesTopRated: Movie[] = await getTrendingMovies(MovieTypes.TOP_RATED)

  return (
    <main className="flex flex-col gap-8 my-8 mt-36 xl:mt-20">
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold'>Trending</h3>
        <MainMovies movies={moviesTrending}/>
      </section>
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold'>Popular</h3>
        <MainMovies movies={moviesPopular}/>
      </section>
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold'>Top rated</h3>
        <MainMovies movies={moviesTopRated}/>
      </section>
    </main>
  )
}