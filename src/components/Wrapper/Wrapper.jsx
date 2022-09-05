import * as React from 'react'

import './index.css'

export const Wrapper = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`wrapper`}
      style={{
        display: `grid`,
        gap: `1em`,
        height: `100vh`,
        margin: `auto`,
        placeContent: `center`,
        placeItems: `center`,
        textAlign: `center`,
        width: `calc(100vw - 4em)`,
      }}
    >
      {children}
    </div>
  )
}

export default Wrapper
