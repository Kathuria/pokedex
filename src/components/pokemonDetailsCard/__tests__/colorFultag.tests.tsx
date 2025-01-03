import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorfulTag from '../colorfulTags/colorfulTag';

jest.mock('../../../constants/pokemon.types', () => ({
  getPokcolor: jest.fn(() => 'linear-gradient(to right, #ff7e5f, #feb47b)'),
}));

describe('ColorfulTag Component', () => {
  const mockProps = {
    text: 'Electric',
    className: 'test-class',
    type: 'electric',
  };

  it('renders the tag with correct text', () => {
    render(<ColorfulTag {...mockProps} />);
    const tagElement = screen.getByText(/Electric/i);
    expect(tagElement).toBeInTheDocument();
  });

  it('applies the correct background style', () => {
    render(<ColorfulTag {...mockProps} />);
    const tagElement = screen.getByText(/Electric/i);
    expect(tagElement).toHaveStyle('background: linear-gradient(to right, #ff7e5f, #feb47b)');
  });

  it('applies the correct className', () => {
    render(<ColorfulTag {...mockProps} />);
    const tagElement = screen.getByText(/Electric/i).closest('div');
    expect(tagElement).toHaveClass('test-class');
  });
});
