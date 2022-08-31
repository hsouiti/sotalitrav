import * as React from 'react'
import type { HeadFC } from 'gatsby'
import Seo from '../components/seo'
import { Hero } from '../sections'

const IndexPage = () => {
  return <Hero />
}

export const Head: HeadFC = () => <Seo title="Accueil" />
export default IndexPage
