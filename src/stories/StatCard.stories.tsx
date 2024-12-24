import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StatCard from '../components/pokemonDetailsCard/statCard/statCard';

// Mock data for the StatCard
const mockStatsData = [
  { base_stat: 45, stat: { name: 'hp' } },
  { base_stat: 49, stat: { name: 'attack' } },
  { base_stat: 49, stat: { name: 'defense' } },
  { base_stat: 65, stat: { name: 'special-attack' } },
  { base_stat: 65, stat: { name: 'special-defense' } },
  { base_stat: 45, stat: { name: 'speed' } },
];

export default {
  title: 'Components/StatCard',
  component: StatCard,
  argTypes: {
    stats: { control: 'object' },
  },
} as Meta<typeof StatCard>;

const Template: StoryFn<typeof StatCard> = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: mockStatsData,
};
