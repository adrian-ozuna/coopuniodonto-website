import { defineField, defineType } from 'sanity'

export const headerSectionType = defineType({
  name: 'headerSection',
  title: 'Seccion de encabezado',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Encabezado',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeadline',
      title: 'Sub-encabezado',
      type: 'string',
    }),
    defineField({
      name: 'headerBgImage',
      title: 'Imagen de fondo del encabezado',
      type: 'image',
    }),
  ],
})

