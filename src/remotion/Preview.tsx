// @ts-check
import * as React from 'react'
import {Player} from '@remotion/player'
import {Main} from '../components/Main'
import {hdVideo} from './utils.mjs'

export const Preview = (props) => {
  return (
    <Player
      controls
      key="player"
      component={Main}
      durationInFrames={360} // durationInFrames = video duration * fps
      compositionWidth={hdVideo.width as number}
      compositionHeight={hdVideo.height as number}
      moveToBeginningWhenEnded={false}
      fps={24}
      inputProps={props}
    />
  )
}
