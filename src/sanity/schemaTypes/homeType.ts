import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Pagina principal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo de la pagina',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Secciones de la pagina',
      type: 'reference',
      to: [
        { type: 'benefitsSection' },
        { type: 'statisticsSection' },
        { type: 'aboutUsSection' },
      ]
    }),
  ],
})