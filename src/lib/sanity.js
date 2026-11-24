import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'yg4dqb9z',
  dataset: 'crevosblogdata',
  apiVersion: '2026-11-24',
  useCdn: false,
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}