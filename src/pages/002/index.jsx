// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import { Body, useTemplate, useAnimation } from '@myadbox/exoplanet-toolkit'
import page from './data/values.mjs'
import Title from '../../components/Title.jsx'
import Wrapper from '../../components/Wrapper.jsx'

/** @type ExoTemplate */

const Template = (props) => {
  // Ensure that props you destructure from useTemplate match those found in
  // data/values.mjs and data/config.mjs `fields`.
  const {
    root,
    page: { start, brand, end },
  } = useTemplate({ page, ...props })

  return (
    <Body
      style={{
        color: `white`,
      }}
      backdropStyle={{
        backgroundColor: `var(--midnight-forest)`,
        backgroundImage: `radial-gradient(hsla(74deg, 100%, 62%, .5) 2%, hsla(186deg, 88%, 9%, .4) 100%)`,
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
      >
        {/* --- TITLE --- */}
        <Wrapper>
          <Title start={start} brand={brand} end={end} />
          <p>without animation</p>
          <div>
            <img
              id="reactLogo"
              // for static (non-Sesimi assets) local images above 5KB use the following syntax:
              src={`${root}/img/react.svg`}
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
