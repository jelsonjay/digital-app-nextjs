import React from "react"
import Head from 'next/head'
import Link from 'next/link'




const Layout = ({ children, title }) => {

  return (
     <>
    <Head>
    <title>Digital-JA</title>
    </Head>

    <Layout>
    <header>
    <Link href="/"> <a>Home</a>  </Link>
    </header>
    <h1>{title}</h1>
      {children}
      <footer>Footer here </footer>
    </Layout>

    </>
  )
}

export default Layout
