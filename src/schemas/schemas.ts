
import * as z from 'zod'

export const formSchema = z.object({
  movie: z.string().min(1, {
    message: "Search cannot be empty.",
  }).max(10, {
    message: "Movie names must be at most 10 characters.",
  }),
})
