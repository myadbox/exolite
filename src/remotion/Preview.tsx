import * as React from 'react'
import {Player} from '@remotion/player'
import {Main} from '../components/Main'
import {allSizes} from '@myadbox/nebula-template-utils'

const {width, height} = allSizes.video.screen.sizes.hd

export const Preview = (props) => {
  return (
    <Player
      controls
      key="player"
      component={Main}
      durationInFrames={360} // durationInFrames = video duration * fps
      compositionWidth={width as number}
      compositionHeight={height as number}
      moveToBeginningWhenEnded={false}
      fps={24}
      inputProps={props}
    />
  )
}
