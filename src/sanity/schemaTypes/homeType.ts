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
  ],
})