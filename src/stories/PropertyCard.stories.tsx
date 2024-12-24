import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PropertyCard from '../components/pokemonDetailsCard/propertyCard/propertyCard';

// Mock data for the PropertyCard
const mockSpeciesData = {
  egg_groups: [
    { name: 'monster' },
    { name: 'dragon' },
  ],
};

const mockData = {
  height: 7,
  weight: 690,
  abilities: [
    { ability: { name: 'overgrow' } },
    { ability: { name: 'chlorophyll' } },
  ],
  types: [
    { type: { name: 'grass' } },
    { type: { name: 'poison' } },
  ],
};

const mockPokemonTypeData = {
  damage_relations: {
    double_damage_from: [
      { name: 'fire' },
      { name: 'flying' },
      { name: 'ice' },
    ],
  },
};

export default {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  argTypes: {
    speciesData: { control: 'object' },
    data: { control: 'object' },
    pokemonTypeData: { control: 'object' },
  },
} as Meta<typeof PropertyCard>;

const Template: StoryFn<typeof PropertyCard> = (args) => <PropertyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  speciesData: mockSpeciesData,
  data: mockData,
  pokemonTypeData: mockPokemonTypeData,
};
