import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Homepage from '../Components/Homepage.js'
import '@testing-library/jest-dom'




describe('Homepage test', () => {
    const renderHomepage = () => 
    render(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>
    )

    test('items are displayed', () => {
        renderHomepage()
        expect(screen.getByText('Welcome To Paradise')).toBeInTheDocument()
        expect(screen.getByText('Start Browsing')).toBeInTheDocument()
    })

})