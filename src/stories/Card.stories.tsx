import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PokemonCard from '../components/pokemonCard/pokemonCard';

const mockPokemonData = {
  name: 'Pikachu',
  id: 25,
  sprites: {
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
      },
    },
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  types: [{ type: { name: 'electric' } }],
};

export default {
  title: 'Components/Card',
  component: PokemonCard,
  argTypes: {
    data: { control: 'object' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
  },
} as Meta<typeof PokemonCard>;

const Template: StoryFn<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: mockPokemonData,
  className: 'pokemon-card',
  onClick: () => console.log('Card clicked'),
};
