import * as React from 'react'

export const Wrapper = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        display: `grid`,
        rowGap: `1rem`,
      }}
    >
      {children}
    </div>
  )
}

export default Wrapper
