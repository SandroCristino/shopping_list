import React from 'react'
import { render, screen } from '@testing-library/react'
import RouteSwitch from '../Components/RouteSwitch'

test('able to display route /', () => {
    render(<RouteSwitch/>)

    expect(screen.getByText('Homepage')).toBeInTheDocument()
})
