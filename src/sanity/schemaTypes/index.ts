import { type SchemaTypeDefinition } from 'sanity'
import { menuItem } from './menuItem'
import { galleryImage } from './galleryImage'
import { buffetItem } from './buffetItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItem, galleryImage, buffetItem],
}
