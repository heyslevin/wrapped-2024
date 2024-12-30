import {Blocks} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'blockContent',
      type: 'array',
      of: [
        {
          type: 'block',
          of: [
            {
              name: 'image',
              type: 'image',
            },
          ],
        },
      ],
    }),
  ],
  icon: () => <Blocks size={16} />,
})
