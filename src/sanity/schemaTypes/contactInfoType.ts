import { defineField, defineType } from 'sanity'

export const contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Informacion de contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Numero de telefono',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Direccion',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})