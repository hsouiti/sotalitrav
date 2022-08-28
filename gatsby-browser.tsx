import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'

import './src/styles/global.css'

import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
