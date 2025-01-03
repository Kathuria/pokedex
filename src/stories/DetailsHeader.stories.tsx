import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DetailsHeader from '../components/pokemonDetailsCard/detailsHeader/detailsHeader';

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

const mockSpeciesData = {
  flavor_text_entries: [
    { flavor_text: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.', language: { name: 'en' } },
  ],
};

export default {
  title: 'Components/DetailsHeader',
  component: DetailsHeader,
  argTypes: {
    data: { control: 'object' },
    speciesData: { control: 'object' },
    backClick: { action: 'back clicked' },
    closeClick: { action: 'close clicked' },
    forwordClick: { action: 'forward clicked' },
  },
} as Meta<typeof DetailsHeader>;

const Template: StoryFn<typeof DetailsHeader> = (args) => <DetailsHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: mockPokemonData,
  speciesData: mockSpeciesData,
  backClick: () => console.log('Back clicked'),
  closeClick: () => console.log('Close clicked'),
  forwordClick: () => console.log('Forward clicked'),
};
