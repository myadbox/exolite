import * as React from 'react'
import {Composition} from 'remotion'
import {Main} from '../components/Main'
import defaultValues from '../pages/001/data/values.mjs'
import {allSizes} from '@myadbox/nebula-template-utils'

const {width, height} = allSizes.video.screen.sizes.hd

// bring in minified css after previous bundling step
import '../../dist/template/index.css'

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="Default"
      component={Main}
      durationInFrames={360} // durationInFrames = video duration * fps
      fps={24}
      width={width as number}
      height={height as number}
      defaultProps={{page: defaultValues}}
    />
  )
}
