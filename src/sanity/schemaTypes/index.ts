import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'
import { recipeType } from './recipeType'
import { articleType } from './articleType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, authorType, recipeType, articleType],
}
