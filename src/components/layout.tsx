import * as React from 'react'
import { PageProps } from 'gatsby'
import Footer from './footer'
import Header from './header/header'

const Layout = ({ children }: PageProps) => {
  return (
    <main className="layout">
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {children}
      <Footer />
    </main>
  )
}

export default Layout
