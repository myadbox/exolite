// @ts-check
import * as React from 'react'
import {CornerFold} from '@myadbox/exoplanet-toolkit'
import Page from './pages/001'
import page from './pages/001/data/values.mjs'

const isMultipage = false
const Wrapper = isMultipage ? CornerFold : React.Fragment

/** @type ExoTemplate */
const Template = (props) => {
  return (
    <Wrapper to="/?page=001">
      <Page {...{page, ...props, cancelAnimation: true}} />
    </Wrapper>
  )
}

export default Template
