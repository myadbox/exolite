// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import { Body, useTemplate, useAnimation } from '@myadbox/exoplanet-toolkit'
import page from './data/values.mjs'
import reactLogo from '../../img/react.svg'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'

/** @type ExoTemplate */

const Template = (props) => {
  // Ensure that props you destructure from useTemplate match those found in
  // data/values.mjs and data/config.mjs `fields`.
  const {
    page: { start, brand, end },
  } = useTemplate({ page, ...props })
  const animation = useAnimation(props)

  return (
    <Body
      animation={animation}
      style={{
        color: `white`,
      }}
      backdropStyle={{
        backgroundColor: `var(--midnight-forest)`,
        backgroundImage: `radial-gradient(hsla(74deg, 100%, 62%, .15) 2%, hsla(186deg, 88%, 9%, .4) 100%)`,
        backgroundBlendMode: `overlay`,
      }}
    >
      {/* --- TEMPLATE CONTAINER --- */}
      <div
        style={{
          width: `100vw`,
          height: `100vh`,
          display: `grid`,
          placeContent: `center`,
          textAlign: `center`,
        }}
        className={`
          display:grid
        `}
      >
        {/* --- TITLE --- */}
        <Wrapper>
          <Title start={start} brand={brand} end={end} />
          <p>with React and JSX</p>
          <div>
            <img
              id="reactLogo"
              // images under 5KB can be imported directly (see top of this file) and will be
              // inlined as Base64 with the template js file
              src={reactLogo}
              // for static (non-Sesimi assets) local images above 5KB use the following syntax:
              // src={`${baseUrl}/img/react.svg`}
              alt="React"
              width="80"
              style={{
                display: `inline-block`,
                opacity: 0.1,
              }}
            />
          </div>
        </Wrapper>
      </div>
    </Body>
  )
}

export default Template
