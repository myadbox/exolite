#!/usr/bin/env node
// @ts-check

// This script is used to change the name property of the package.json file to the parent directory name.

import replace from 'replace'
import {createRequire} from 'module'
// @ts-ignore
const require = createRequire(import.meta.url)

const packageJson = require(`../package.json`)

const exoliteName = `@myadbox/exolite`
const name = packageJson.name

const [, , ...args] = process.argv
const force = args.includes(`--force`)

if (name !== exoliteName && !force) {
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
  regex: /<title>[^<]*<\/title>/,
  replacement: `<title>${newName}</title>`,
  paths: [`./index.html`],
  recursive: false,
  silent: false,
})
