import * as React from 'react'
import { CornerFold } from '@myadbox/exoplanet-toolkit'
import Page from './pages/001'
import initialPage from './pages/001/data/values.mjs'

const Template = (props) => {
  return (
    <CornerFold to="/?page=001">
      <Page {...{ page: initialPage, ...props, cancelAnimation: true }} />
    </CornerFold>
  )
}

export default Template
