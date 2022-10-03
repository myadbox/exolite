import React from 'react'
import ReactDOM from 'react-dom'
import queryString from 'query-string'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import {gsap} from '@myadbox/exoplanet-toolkit/vendor/gsap'
import {GSDevTools} from '@myadbox/exoplanet-toolkit/vendor/gsap/GSDevTools'
import './gsap-scrubber.css'
import '../src/index.scss'
import values from '../src/data/values.mjs'

const pageRequest = queryString.parse(location.search)?.page

const mount = ({default: Template}) => {
  ReactDOM.render(<Template libs={{gsap, GSDevTools}} localeValues={values} />, document.getElementById(`root`))
}

if (pageRequest) {
  // NOTE: variables in dynamic import arg can only represent filenames one level deep.
  // https://vitejs.dev/guide/features.html#dynamic-import
  import(`../src/pages/${pageRequest}/index.jsx`).then(mount)
} else {
  import(`../src/index.jsx`).then(mount)
}
