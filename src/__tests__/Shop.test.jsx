import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from '../pages/shopping/shop';
import { ChakraProvider } from '@chakra-ui/react';

const mockProducts = {
  products: [
    {
      id: 1,
      title: 'Test Shoe 1',
      brand: 'Brand 1',
      price: 99.99,
      thumbnail: 'test-image-1.jpg'
    },
    {
      id: 2,
      title: 'Test Shoe 2',
      brand: 'Brand 2',
      price: 149.99,
      thumbnail: 'test-image-2.jpg'
    }
  ]
};

describe('Shop Component', () => {
  const mockProps = {
    products: mockProducts,
    loading: false,
    error: null,
    quantities: {},
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

  test('renders loading state', () => {
    renderWithChakra(<Shop {...mockProps} loading={true} />);
    // Look for the loader element by class name instead of text
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('renders error state', () => {
    const testError = new Error('Test error');
    renderWithChakra(<Shop {...mockProps} error={testError} />);
    expect(screen.getByText(/Error when fetching: Test error/i)).toBeInTheDocument();
  });

  test('renders product list', () => {
    renderWithChakra(<Shop {...mockProps} />);
    expect(screen.getByText('Test Shoe 1')).toBeInTheDocument();
    expect(screen.getByText('Test Shoe 2')).toBeInTheDocument();
  });
});