import { defineField, defineType } from 'sanity'

export const ctaSectionType = defineType({
  name: 'ctaSection',
  title: 'CTA',
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