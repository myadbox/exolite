import React from 'react'
import ReactDOM from 'react-dom/client'
import queryString from 'query-string'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/GSDevTools'
import './gsap-scrubber.css'
import '../src/index.css'
import values from '../src/data/values.mjs'

const pageRequest = queryString.parse(location.search)?.page

const mount = ({ default: Template }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Template libs={{ gsap, GSDevTools }} localeValues={values} />
  )
}

if (pageRequest) {
  // NOTE: import arg can not be an expression or solely a variable, because Webpack.
  // https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
  import(`../src/pages/${pageRequest}/index.jsx`).then(mount)
} else {
  import(`../src/index.jsx`).then(mount)
}
