// @ts-check
import * as React from 'react'

export const Wrapper = ({children, className = ``, style = {}, ...props}) => {
  return (
    <div
      {...props}
      className={`wrapper ${className}`}
      style={{
        display: `grid`,
        gap: `1em`,
        height: `100vh`,
        margin: `auto`,
        placeContent: `center`,
        placeItems: `center`,
        textAlign: `center`,
        width: `calc(100vw - 4em)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Wrapper
