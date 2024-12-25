import { defineField, defineType } from 'sanity'

export const aboutUsSectionType = defineType({
  name: 'aboutUsSection',
  title: 'Seccion de sobre nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo de la seccion',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'historyTitle',
      title: 'Titulo de la historia',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'history',
      title: 'Historia',
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