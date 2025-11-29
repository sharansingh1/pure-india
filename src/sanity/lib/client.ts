import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Changed to false to see real-time updates
  // token: process.env.SANITY_API_TOKEN, // We can add this later if needed
})
