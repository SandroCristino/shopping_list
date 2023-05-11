import React from 'react' 
import { render,screen } from '@testing-library/react'
import ShoppingItems from '../Components/ShoppingItems.js'

jest.mock('../Assets/BigBrightBlue.jpg', () => 'image-file-mock')


describe('ShoppingItems component', () => {
    test('item should render picture, price and name', () => {
    
        const renderProfile = () =>
        render(
          <ShoppingItems
            picture="image-file-mock"
            name="BigBrightBlue"
            price='49.99$'
          />
        );

        renderProfile()
        expect(screen.getByText(/BigBrightBlue/)).toBeInTheDocument()
        expect(screen.getByText('49.99$')).toBeInTheDocument()

        const pictureElement = screen.getByRole('img')
        expect(pictureElement).toBeInTheDocument()
        expect(pictureElement).toHaveAttribute('src', 'image-file-mock')
    })
})
   