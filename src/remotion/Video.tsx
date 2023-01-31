import * as React from 'react'
import {Composition} from 'remotion'
import {Main} from '../components/Main'
import {hdVideo} from './utils.mjs'
import defaultValues from '../pages/001/data/values.mjs'

// bring in minified css after previous bundling step
import '../../dist/template/index.css'

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="Default"
      component={Main}
      durationInFrames={360} // durationInFrames = video duration * fps
      fps={24}
      width={hdVideo.width as number}
      height={hdVideo.height as number}
      defaultProps={{page: defaultValues}}
    />
  )
}
