import React from 'react';
import { render } from '@testing-library/react';
import ShoppingList from '../Components/ShoppingList';

describe('ShoppingList', () => {
  it('should render the list of items', () => {
    const { getByText } = render(<ShoppingList />);
    expect(getByText('Big Bright Blue')).toBeInTheDocument();
    expect(getByText('Cherry Blossom')).toBeInTheDocument();
    expect(getByText('Vibrant Blue')).toBeInTheDocument();
    expect(getByText('Cotton Candy')).toBeInTheDocument();
    expect(getByText('European Garden')).toBeInTheDocument();
    expect(getByText('Pink Surprise')).toBeInTheDocument();
    expect(getByText('Red Roses')).toBeInTheDocument();
    expect(getByText('Rose And Lily Celebration')).toBeInTheDocument();
    expect(getByText('Southern Peach')).toBeInTheDocument();
  });
});
