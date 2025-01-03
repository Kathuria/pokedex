import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppFilter from '../filter';
import PokemonContext from '../../../context/pokemonContext/pokmon.context';

const mockContextValue = {
  state: {
    allPokemonsList: [{ name: 'pikachu' }, { name: 'bulbasaur' }],
    pokemonsTypes: [{ label: 'Electric', value: 'electric' }],
    pokemonGenderList: [{ label: 'Male', value: 'male' }],
  },
  getPokemonData: jest.fn(),
  dispatch: jest.fn(),
  setAppLoading: jest.fn(),
  getPokemonDetailsListByUrl: jest.fn().mockResolvedValue([]),
};

describe('AppFilter Component', () => {
  const isFilterEnableMock = jest.fn();

  beforeEach(() => {
    render(
      <PokemonContext.Provider value={mockContextValue as any}>
        <AppFilter isFilterEnable={isFilterEnableMock} />
      </PokemonContext.Provider>
    );
  });

  test('renders search input', () => {
    const searchInput = screen.getByPlaceholderText(/name or number/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('calls isFilterEnable when search input changes', () => {
    const searchInput = screen.getByPlaceholderText(/name or number/i);
    fireEvent.change(searchInput, { target: { value: 'pikachu' } });
    expect(isFilterEnableMock).toHaveBeenCalledWith(true);
  });

  test('renders type filter dropdown', () => {
    const typeDropdown = screen.getByText(/select types/i);
    expect(typeDropdown).toBeInTheDocument();
  });

  test('renders gender filter dropdown', () => {
    const genderDropdown = screen.getByText(/select gender/i);
    expect(genderDropdown).toBeInTheDocument();
  });

  test('calls isFilterEnable when type filter changes', () => {
    const typeDropdown = screen.getByText(/select types/i);
    fireEvent.click(typeDropdown);
    fireEvent.click(screen.getByText(/electric/i));
    expect(isFilterEnableMock).toHaveBeenCalledWith(true);
  });

  test('calls isFilterEnable when gender filter changes', () => {
    const genderDropdown = screen.getByText(/select gender/i);
    fireEvent.click(genderDropdown);
    fireEvent.click(screen.getByText(/male/i));
    expect(isFilterEnableMock).toHaveBeenCalledWith(true);
  });
});
