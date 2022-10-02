#!/usr/bin/env node
// @ts-check

// This script is used to change the name property of the package.json file to the parent directory name.

import replace from 'replace'
import {createRequire} from 'module'
// @ts-ignore
const require = createRequire(import.meta.url)

const packageJson = require(`../package.json`)

const exoliteName = `@myadbox/exolite`
const exoliteTitle = `Sesimi template development`
const name = packageJson.name

if (name !== exoliteName) {
  process.exit(0)
}

const newName = process.cwd().split(`/`).pop().toLowerCase()

replace({
  regex: `"name": "${name}"`,
  replacement: `"name": "${newName}"`,
  paths: [`./package.json`],
  recursive: false,
  silent: false,
})

replace({
  regex: `<title>${exoliteTitle}</title>`,
  replacement: `<title>${newName}</title>`,
  paths: [`./index.html`],
  recursive: false,
  silent: false,
})
