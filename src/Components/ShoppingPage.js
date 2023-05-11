import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import ShoppingList from './ShoppingList'
import '../Styles/ShoppingPage.css'

export default function ShoppingPage() {
  return (
    <div className='outerDivShop'>
      <Navbar />
      <ShoppingList />
      <Footer />
    </div>
  )
}
