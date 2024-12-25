import { defineField, defineType } from 'sanity'

export const socialsType = defineType({
  name: 'socials',
  title: 'Redes sociales',
  type: 'document',
  fields: [
   defineField({
    name: 'socials',
    type: 'array',
    title: 'Redes Sociales',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Nombre' },
          { name: 'link', type: 'url', title: 'Link' },
          { name: 'icon', type: 'image', title: 'Icono' },
        ]
      }
    ]
   })
  ],
})