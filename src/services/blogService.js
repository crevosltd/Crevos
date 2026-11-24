
import {client, urlFor} from '../lib/sanity'

import {
  allBlogPostsQuery,
  featuredBlogPostQuery,
  singleBlogPostQuery,
  relatedBlogPostsQuery,
} from '../lib/blogQueries'

// Convert Sanity image references into URLs
const formatImage = (image) => {
  if (!image?.asset) return null

  return urlFor(image)
    .width(1200)
    .auto('format')
    .url()
}



// Format individual blog posts
const formatBlogPost = (post) => {
  if (!post) return null

  return {
    ...post,
    image: formatImage(post.image),
    authorImage: formatImage(post.authorImage),
    readingTime: post.readingTime || 5,
    category: post.category || 'General',
    author: post.author || 'CREVOS Editorial Team',
  }
}

// Fetch all published blog posts
// Fetch all published blog posts
export const getAllBlogPosts = async () => {
  const posts = await client.fetch(allBlogPostsQuery)

  // console.log('SANITY POSTS:', posts)
  // console.log('RAW SANITY IMAGE:', posts[0]?.image)
  // console.log('FORMATTED IMAGE:', posts[0]?.image
  //   ? formatImage(posts[0].image)
  //   : null
  // )

  return posts.map(formatBlogPost)
}

// Fetch featured article
export const getFeaturedBlogPost = async () => {
  const post = await client.fetch(featuredBlogPostQuery)

  return formatBlogPost(post)
}

// Fetch individual article
export const getBlogPostBySlug = async (slug) => {
  const post = await client.fetch(singleBlogPostQuery, {slug})

  return formatBlogPost(post)
}

// Fetch related articles
export const getRelatedBlogPosts = async (slug, categoryId) => {
  if (!categoryId) return []

  const posts = await client.fetch(relatedBlogPostsQuery, {
    slug,
    categoryId,
  })

  return posts.map(formatBlogPost)
}
