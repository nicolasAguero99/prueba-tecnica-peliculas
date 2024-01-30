'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Components
import Movies from './movies'

export default function PageClient() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Movies />
    </QueryClientProvider>
  )
}
