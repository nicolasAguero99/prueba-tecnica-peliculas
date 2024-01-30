// Constants
import { API_URL } from "@/constants/constants"

// Types
import { type OptionsApi } from "@/types/types"

export const getMovies = async (options: OptionsApi, movie: string) => {
  const api = await fetch(`${API_URL}query=${movie}&include_adult=false&language=en-US&page=1`, options)
  const res = await api.json()
  const data = await res.results
  return data
}