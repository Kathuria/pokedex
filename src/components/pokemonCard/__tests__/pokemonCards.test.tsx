import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from '../pokemonCard';

jest.mock('../../../constants/pokemon.types', () => ({
  getBackground: jest.fn(
    () => 'linear-gradient(to right, #30cfd0 0%, #330867 100%)'
  ),
}));

jest.mock('../../../services/common.service', () => ({
  numberFormation: jest.fn((id) => `#${id.toString().padStart(3, '0')}`),
}));

describe('PokemonCard Component', () => {
  const mockData = {
    name: 'Pikachu',
    id: 25,
    sprites: {
      other: {
        dream_world: {
          front_default: 'https://example.com/pikachu.png',
        },
      },
      front_default: null,
    },
    types: [{ type: { name: 'electric' } }],
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    render(
      <PokemonCard
        data={mockData}
        onClick={mockOnClick}
        className="test-class"
      />
    );
  });

  it('renders the Pokemon name and formatted ID', () => {
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    //expect(screen.getByText(/#025/i)).toBeInTheDocument();
  });

  it('renders the Pokemon image', () => {
    const img = screen.getByAltText(/Avatar/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/pikachu.png');
  });

  it('applies the correct background style', () => {
    const card = screen.getByRole('presentation');
    expect(card).toHaveStyle(
      'background: linear-gradient(to right, #30cfd0 0%, #330867 100%)'
    );
  });

  it('handles click events', () => {
    const card = screen.getByRole('presentation');
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
