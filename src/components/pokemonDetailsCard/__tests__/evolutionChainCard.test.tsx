import React from 'react';
import { render, screen } from '@testing-library/react';
import EvolutionChainCard from '../evolutionChainCard/evolutionChainCard';

jest.mock('../../pokemonCard/pokemonCard', () => (props: any) => (
  <div data-testid="pokemon-card">{props.data.name}</div>
));

describe('EvolutionChainCard Component', () => {
  const mockData = {
    id: 1,
    name: 'Bulbasaur',
  };

  it('renders the correct number of PokemonCards', () => {
    render(<EvolutionChainCard data={mockData} />);
    const pokemonCards = screen.getAllByTestId('pokemon-card');
    expect(pokemonCards).toHaveLength(3);
  });

  it('renders the right arrow icon between PokemonCards', () => {
    render(<EvolutionChainCard data={mockData} />);
    const rightArrowIcons = screen.getAllByAltText(/right arrow icon/i);
    expect(rightArrowIcons).toHaveLength(2);
  });
});
