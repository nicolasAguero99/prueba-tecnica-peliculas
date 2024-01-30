import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { UseFormReturn, useForm } from 'react-hook-form'
import { Input } from './ui/input'
import * as z from 'zod'
import { shallow } from 'zustand/shallow'

// Store
import { useMovieStore } from '@/store/movieStore'

// Schema
import { formSchema } from '@/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

// Types
import { type Movie } from '@/types/types'

// Api
import { getMovies } from '@/app/api/movies'

export default function FormSearch ({ showContent, setShowContent }: { showContent: boolean, setShowContent: (value: boolean) => void }): JSX.Element {
  const { inputSearch } = useMovieStore((state) => ({inputSearch: state.inputSearch}), shallow)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movie: inputSearch,
    },
  })
  const { setMovies, setValueInputSearch } = useMovieStore()

  const hanldeExitSearch = () => setShowContent(false)
  const hanldeEnterSearch = () => setShowContent(true)
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data: Movie[] = await getMovies(values.movie)
    setValueInputSearch(values.movie)
    setMovies(data)
  }

  useEffect(() => {
    form.setValue('movie', inputSearch)
  }, [inputSearch])

  useEffect(() => {
    if (form.getValues().movie === '') {
      hanldeExitSearch() 
      form.clearErrors('movie')
    }
    if (!showContent && form.getValues().movie !== '') hanldeEnterSearch()
  }, [form.watch('movie')])

  return (
    <>
      <div onClick={hanldeExitSearch} className={`${showContent ? '' : 'hidden'} fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/50 cursor-pointer`}></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative flex mx-4 max-w-[970px] mt-6 mb-14">
          <FormField
            control={form.control}
            name="movie"
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>What we see?</FormLabel>
                <FormControl>
                  <Input onFocus={hanldeEnterSearch} className='rounded-md py-6' type='text' placeholder="Ex: Titanic, Marvel, etc..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='bg-transparent absolute bottom-[9px] right-2 p-0.5 ps-[4px] rounded-md h-8' type="submit"><img className='w-full h-full' src="icons/search-icon.svg" alt="search movie" /></Button>
        </form>
      </Form>
    </>
  )
}