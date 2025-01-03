import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EvolutionChainCard from '../components/pokemonDetailsCard/evolutionChainCard/evolutionChainCard';

const mockPokemonData = {
  id: 25,
  name: 'Pikachu',
  sprites: {
    other: {
      dream_world: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
      },
    },
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  types: [
    { type: { name: 'electric' } },
  ],
};

export default {
  title: 'Components/ChainCard',
  component: EvolutionChainCard,
  argTypes: {
    data: { control: 'object' },
  },
} as Meta<typeof EvolutionChainCard>;

const Template: StoryFn<typeof EvolutionChainCard> = (args) => <EvolutionChainCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: mockPokemonData,
};
