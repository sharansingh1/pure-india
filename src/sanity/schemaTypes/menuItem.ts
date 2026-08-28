import { defineField, defineType } from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. $14.99'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Appetizers', value: 'APPETIZERS' },
          { title: 'Indo-Chinese', value: 'INDO-CHINESE' },
          { title: 'Non-Veg Curry', value: 'NON-VEG CURRY' },
          { title: 'Veg Curry', value: 'VEG CURRY' },
          { title: 'Grills', value: 'GRILLS' },
          { title: 'Rice', value: 'RICE' },
          { title: 'Breads', value: 'BREADS' },
          { title: 'Mediterranean', value: 'MEDITERRANEAN' },
          { title: 'Desserts', value: 'DESSERTS' },
          { title: 'Drinks', value: 'DRINKS' },
          { title: 'Meal Specials', value: 'MEAL SPECIALS' },
          { title: 'ToGo Box', value: 'TOGO BOX' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'isVegetarian',
        title: 'Is Vegetarian?',
        type: 'boolean',
        initialValue: false
    }),
    defineField({
        name: 'isSpicy',
        title: 'Is Spicy?',
        type: 'boolean',
        initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})
