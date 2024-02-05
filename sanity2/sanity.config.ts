import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { iconPicker } from 'sanity-plugin-icon-picker'

export default defineConfig({
  name: 'default',
  title: 'nious',

  projectId: '0h423ckl',
  dataset: 'nious-data-set',

  plugins: [structureTool(), visionTool(),iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
