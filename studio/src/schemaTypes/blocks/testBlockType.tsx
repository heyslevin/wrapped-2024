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
  ],
  icon: () => <Blocks size={16} />,
})
