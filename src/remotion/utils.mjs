// @ts-check
import {defineCustomSize, Format, Quality, Unit} from '@myadbox/nebula-template-utils'

export const hdVideo = defineCustomSize({
  label: `HD Video`,
  width: 1920,
  height: 1080,
  unit: Unit.PX,
  format: Format.MP4,
  quality: Quality.Optimised,
})
