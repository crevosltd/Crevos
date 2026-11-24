export const allBlogPostsQuery = `
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    defined(slug.current)
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage,
    "category": categories[0]->title,
    "author": author->name,
    "authorImage": author->image,
    publishedAt,
    readingTime,
    featured,
    seoTitle,
    seoDescription
  }
`;

export const featuredBlogPostQuery = `
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    featured == true &&
    defined(slug.current)
  ]
  | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage,
    "category": categories[0]->title,
    "author": author->name,
    "authorImage": author->image,
    publishedAt,
    readingTime,
    featured,
    seoTitle,
    seoDescription
  }
`;

export const singleBlogPostQuery = `
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage,
"imageAlt": mainImage.alt,
"dateModified": _updatedAt,
    "category": categories[0]->title,
    "categoryId": categories[0]._ref,
    "author": author->name,
    "authorImage": author->image,
    "authorBio": author->bio,
    publishedAt,
    readingTime,
    featured,
    body,
    seoTitle,
    seoDescription
  }
`;

export const relatedBlogPostsQuery = `
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    slug.current != $slug &&
    count(categories[@._ref == $categoryId]) > 0
  ]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage,
    "category": categories[0]->title,
    "author": author->name,
    "authorImage": author->image,
    publishedAt,
    readingTime,
    featured
  }
`;
