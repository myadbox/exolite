// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import { Body, useTemplate, useAnimation } from '@myadbox/exoplanet-toolkit'
import reactLogo from './img/react.svg'

const Template = (/** @type TemplateProps */ props) => {
  // Ensure props you destructure from useTemplate match those in data/values.mjs and data/config.mjs `fields`.
  const { title } = useTemplate(props)
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
      >
        {/* --- TITLE --- */}
        <div>
          <h1
            style={{
              color: `white`,
              fontWeight: `400`,
            }}
          >
            {title.start}
            <span
              style={{
                color: `var(--electric-lime)`,
                textTransform: `lowercase`,
                fontWeight: `400`,
                filter: `drop-shadow(0 0 7px currentColor)`,
              }}
            >
              {title.brand}
            </span>{' '}
            {title.end}
          </h1>
          <p>with React and JSX</p>
          <img
            id="reactLogo"
            src={reactLogo}
            alt="React"
            width="80"
            style={{
              display: `inline-block`,
              opacity: 0.1,
            }}
          />
        </div>
      </div>
    </Body>
  )
}

export default Template
