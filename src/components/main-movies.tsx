import { Card, CardTitle, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Components
import CardMovieMain from './card-movie-main'

// Types
import { type Movie } from '@/types/types'

export default function MainMovies({ movies }: { movies: Movie[] }) {

  return (
    <div className="flex gap-8">
      <Carousel>
        <CarouselContent>
        {
          movies?.length < 1
            ? <p>Loading...</p>
            : movies?.map((movie) => (
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <CardMovieMain key={movie.id} movie={movie} />
                </CarouselItem>
              )
            )
        }
        </CarouselContent>
      </Carousel>
    </div>
  )
}