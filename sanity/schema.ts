import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project-schema'
import vimeo from './schemas/vimeo-schema'
import youtube from './schemas/youtube-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, vimeo, youtube],
}
