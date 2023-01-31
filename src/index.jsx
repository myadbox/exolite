// @ts-check
import * as React from 'react'
import {IndexWrapper} from '@myadbox/exoplanet-toolkit'
import Page from './pages/001'

const isMultipage = false
const Wrapper = isMultipage ? IndexWrapper : React.Fragment

/** @type ExoTemplate */
const Template = (props) => {
  return (
    <Wrapper>
      <Page {...props} />
    </Wrapper>
  )
}

export default Template
