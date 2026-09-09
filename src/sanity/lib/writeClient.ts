import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Server-only client with write access. Never import this from client components
// or anything bundled to the browser — the token must stay server-side.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
})
