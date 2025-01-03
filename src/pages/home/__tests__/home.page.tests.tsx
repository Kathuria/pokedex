import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../home.page'; // Adjust the path as necessary
import PokemonContext  from '../../../context/pokemonContext/pokmon.context';
import userEvent from '@testing-library/user-event';

// Mock components used in HomePage
jest.mock('../../../components/header/header', () => () => <div>Header</div>);
jest.mock('../../../components/pokemonCard/pokemonCard', () => (props: any) => <div data-testid="pokemon-card">{props.data.name}</div>);
jest.mock('../../../components/filter/filter', () => (props: any) => <div>Filter</div>);

describe('HomePage Component', () => {
  const mockState = {
    pokemonsList: [{ id: 1, name: 'Bulbasaur' }, { id: 2, name: 'Ivysaur' }],
    isLoading: false,
    isLoadMoreInprogress: false,
  };

  const mockContextValue = {
    state: mockState,
    getPokemonData: jest.fn(),
  };

  it('renders header and filter components', () => {
    render(
      <PokemonContext.Provider value={mockContextValue as any}>
        <HomePage />
      </PokemonContext.Provider>
    );

    expect(screen.getByText(/Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  });

  it('renders pokemon cards', () => {
    render(
      <PokemonContext.Provider value={mockContextValue as any}>
        <HomePage />
      </PokemonContext.Provider>
    );

    const pokemonCards = screen.getAllByTestId('pokemon-card');
    expect(pokemonCards).toHaveLength(2);
    expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/Ivysaur/i)).toBeInTheDocument();
  });

  it('shows loading indicator when loading', () => {
    const loadingState = { ...mockState, isLoading: true };
    render(
      <PokemonContext.Provider value={{ ...mockContextValue, state: loadingState } as any}>
        <HomePage />
      </PokemonContext.Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('shows no data found message when pokemon list is empty', () => {
    const emptyState = { ...mockState, pokemonsList: [] };
    render(
      <PokemonContext.Provider value={{ ...mockContextValue, state: emptyState } as any}>
        <HomePage />
      </PokemonContext.Provider>
    );

    expect(screen.getByText(/No data found/i)).toBeInTheDocument();
  });
});
