
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Article Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'readingTime',
      title: 'Reading Time (Minutes)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Display this article in the featured section of the blog.',
      initialValue: false,
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },

    prepare(selection) {
      const {author, publishedAt} = selection

      return {
        ...selection,
        subtitle: [
          author && `By ${author}`,
          publishedAt && new Date(publishedAt).toLocaleDateString(),
        ]
          .filter(Boolean)
          .join(' | '),
      }
    },
  },
})
