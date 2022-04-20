import React from 'react'
import Footer from './Footer.component'
import Header from './Header.component'

const Container = ({children}) => {
  return (
    <div className='Container'>
      <Header />
      <main className='Main'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Container