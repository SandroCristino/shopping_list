import React from 'react' 
import { render } from '@testing-library/react'
import ShoppingItems from '../Components/ShoppingItems.js'

jest.mock('../Assets/BigBrightBlue.jpg', () => 'image-file-mock')


describe('ShoppingItems component', () => {
    test('item should render picture, price and name', () => {
        const props = {
            picture: 'image-file-mock',
            name: 'BigBrightBlue', 
            price: '49.99$'
        } 

        const {getByText, getByAltText} = render(<ShoppingItems {...props} />)

        const picture = getByAltText(props.name)
        expect(picture).toHaveAttribute('src', props.picture)

        const name = getByText(props.name)
        expect(name).toBeInTheDocument()

        const price = getByText(props.price)
        expect(price).toBeInTheDocument()

    })
})
   