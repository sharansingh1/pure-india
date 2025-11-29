import { type SchemaTypeDefinition } from 'sanity'
import { menuItem } from './menuItem'
import { galleryImage } from './galleryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItem, galleryImage],
}
