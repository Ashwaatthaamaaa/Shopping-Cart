import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/productCard/productCard';
import { ChakraProvider } from '@chakra-ui/react';

const mockProduct = {
  id: 1,
  title: 'Test Shoe',
  brand: 'Test Brand',
  price: 99.99,
  thumbnail: 'test-image.jpg'
};

describe('ProductCard Component', () => {
  const mockProps = {
    id: 1,
    product: mockProduct,
    quantity: 0,
    updateQuantity: jest.fn(),
    updateWishlist: jest.fn(),
    removeFromWishlist: jest.fn(),
    wishlist: new Set()
  };

  const renderWithChakra = (component) => {
    return render(
      <ChakraProvider>{component}</ChakraProvider>
    );
  };

  test('renders product information correctly', () => {
    renderWithChakra(<ProductCard {...mockProps} />);
    
    expect(screen.getByText('Test Shoe')).toBeInTheDocument();
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  test('handles wishlist toggle', () => {
    renderWithChakra(<ProductCard {...mockProps} />);
    
    // Find the wishlist div by its class name
    const wishlistDiv = screen.getByTestId('wishlist-button');
    fireEvent.click(wishlistDiv);
    
    expect(mockProps.updateWishlist).toHaveBeenCalledWith(1);
  });

  test('handles quantity change', () => {
    renderWithChakra(<ProductCard {...mockProps} />);
    
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '2' } });
    
    expect(mockProps.updateQuantity).toHaveBeenCalledWith(1, '2');
  });
});