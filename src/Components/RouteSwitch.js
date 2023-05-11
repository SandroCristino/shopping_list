import React from 'react'
import Homepage from './Homepage'
import ShoppingPage from './ShoppingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/home'} exact element={<Homepage />} />
            <Route path={'/shopping-page'} element={<ShoppingPage />} />
        </Routes>
    </BrowserRouter>
  )
}

