import { defineField, defineType } from 'sanity'

export const statisticsSectionType = defineType({
  name: 'statisticsSection',
  title: 'Seccion de estadisticas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo de la seccion',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
   defineField({
    name: 'statistics',
    type: 'array',
    title: 'Estadisticas',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Titulo' },
          { name: 'statisticValue', type: 'string', title: 'valor' },
        ]
      }
    ]
   })
  ],
})