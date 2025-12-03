import { defineField, defineType } from 'sanity'

export const buffetItem = defineType({
  name: 'buffetItem',
  title: 'Buffet Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
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
          { title: 'Appetizers - Veg', value: 'APPETIZERS – VEG' },
          { title: 'Appetizers - Non-Veg', value: 'APPETIZERS – NON-VEG' },
          { title: 'Veg Curry', value: 'VEG CURRY' },
          { title: 'Non-Veg Curry', value: 'NON-VEG CURRY' },
          { title: 'Biryani', value: 'BIRYANI' },
          { title: 'Rice', value: 'RICE' },
          { title: 'Dosa', value: 'DOSA' },
          { title: 'Bread', value: 'BREAD' },
          { title: 'Kids Menu', value: 'KIDS MENU' },
          { title: 'Drinks', value: 'DRINKS' },
          { title: 'Dessert', value: 'DESSERT' },
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

