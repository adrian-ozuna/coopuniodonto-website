import { defineField, defineType } from 'sanity'

export const ctoSectionType = defineType({
  name: 'ctoSection',
  title: 'CTO',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo de la seccion',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})