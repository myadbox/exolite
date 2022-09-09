// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import {Body, useTemplate /*, useAnimation*/} from '@myadbox/exoplanet-toolkit'
import page from './data/values.mjs'
import reactLogo from '../../img/react.svg'
import Title from '../../components/Title/Title'
import Wrapper from '../../components/Wrapper/Wrapper'

/** @type ExoTemplate */
const Template = (props) => {
  // Ensure that props you destructure from useTemplate match those found in
  // data/values.mjs and data/config.mjs `fields`.
  const {
    page: {start, brand, end},
  } = useTemplate({page, ...props})
  // const animation = useAnimation(props)

  return (
    <Body
      // animation={animation}
      style={{
        color: `white`,
      }}
      backdropStyle={{
        backgroundColor: `var(--midnight-forest)`,
        backgroundImage: `radial-gradient(
          hsla(74deg, 100%, 62%, .5) 2%,
          hsla(186deg, 88%, 9%, .4) 100%
        )`,
        backgroundBlendMode: `overlay`,
      }}
    >
      <Wrapper>
        <Title start={start} brand={brand} end={end} />
        <p>with React and CSS</p>
        <img
          id="reactLogo"
          // images under 5KB can be imported directly (see top of this file) and will be
          // inlined as Base64 with the template js file
          src={reactLogo}
          // for static (non-Sesimi assets) local images above 5KB when optimised, use the following syntax:
          // src={`${root}/img/react.svg`}
          alt="React"
          width="80"
          style={{
            opacity: `0.2`,
            width: `min(12vmax, 5.5em)`,
          }}
        />
      </Wrapper>
    </Body>
  )
}

export default Template
