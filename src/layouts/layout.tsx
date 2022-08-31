import * as React from 'react'
import { PageProps } from 'gatsby'
import Footer from '../components/footer'
import Header from './header'

const Layout = ({ children }: PageProps) => {
  return (
    <main>
      {/*  <Header /> */}
      {children}
      {/*  <Footer /> */}
    </main>
  )
}

export default Layout
