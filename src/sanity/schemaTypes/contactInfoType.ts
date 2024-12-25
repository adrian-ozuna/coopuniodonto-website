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
      name: 'email',
      title: 'Correo electrónico',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapsLink',
      title: 'Link de Google Maps',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Direccion',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})