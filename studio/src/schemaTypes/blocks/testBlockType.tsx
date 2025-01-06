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
    defineField({
      name: 'tabs',
      type: 'array',
      of: [
        defineField({
          name: 'tab',
          type: 'object',
          fields: [
            defineField({
              name: 'industry',
              type: 'string',
            }),
            defineField({
              name: 'percentage',
              type: 'string',
            }),
            defineField({
              name: 'image',
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'metrics',
      type: 'array',
      of: [
        defineField({
          name: 'metric',
          type: 'object',
          fields: [
            defineField({
              name: 'bigNumber',
              type: 'string',
            }),
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'text',
              rows: 2,
            }),
          ],
        }),
      ],
    }),
  ],
  icon: () => <Blocks size={16} />,
})
