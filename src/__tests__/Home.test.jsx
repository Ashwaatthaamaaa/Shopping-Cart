import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/home';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Welcome To footwear.')).toBeInTheDocument();
    expect(screen.getByText('Step into style, walk with confidence')).toBeInTheDocument();
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });
});