import { defineField, defineType } from 'sanity'

export const benefitSectionType = defineType({
  name: 'benefitsSection',
  title: 'Seccion de beneficios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo de la seccion',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
   defineField({
    name: 'benefits',
    type: 'array',
    title: 'Beneficios',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Titulo', validation: (Rule) => Rule.required() },
          { name: 'description', type: 'string', title: 'Descripcion', validation: (Rule) => Rule.required() },
          { name: 'icon', type: 'image', title: 'Icono' },
        ]
      }
    ]
   })
  ],
})