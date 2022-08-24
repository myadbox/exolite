// @ts-check
import {
  allFormats,
  allSizes,
  defineConfig,
  embedSizes,
} from '@myadbox/nebula-template-utils'

export default defineConfig({
  sizes: embedSizes({
    support: {
      categories: [allSizes.social.facebook.main],
    },
  }),
  defaultSize: allSizes.social.facebook.main.sizes.story.label,
  formats: allFormats.web.static,
  fields: [],
})
