// @ts-check
import {allFormats, allSizes, defineConfig, embedSizes} from '@myadbox/nebula-template-utils'

export default defineConfig({
  sizes: embedSizes({
    support: {
      categories: [allSizes.bannerAd.main],
    },
  }),
  defaultSize: allSizes.bannerAd.main.sizes.halfPageAd.label,
  formats: allFormats.web.static,
  fields: [],
})
