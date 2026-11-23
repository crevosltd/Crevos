import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Crevos Blog',

  projectId: 'yg4dqb9z',
  dataset: 'crevosblogdata',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
