import * as React from 'react'
import { PageProps } from 'gatsby'
import Footer from '../layouts/footer'
import Header from './header'

const Layout = ({ children }: PageProps) => {
  return (
    <main>
      <Header />
      {children}
      {/*  <Footer /> */}
    </main>
  )
}

export default Layout
