import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Features } from '../../Components/Features/Features'
import { Categories } from '../../Components/Categories/Categories'
import { Footer } from '../../Components/Footer/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Categories />

      <Footer />
    </>
  )
}
