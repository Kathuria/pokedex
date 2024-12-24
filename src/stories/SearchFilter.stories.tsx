import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchFilter from '../components/filter/search/search.filter';

export default {
  title: 'Components/SearchFilter',
  component: SearchFilter,
  argTypes: {
    placeholder: { control: 'text' },
    inputClass: { control: 'text' },
    onChangeHandler: { action: 'changed' },
    label: { control: 'text' },
  },
} as Meta<typeof SearchFilter>;

const Template: StoryFn<typeof SearchFilter> = (args) => <SearchFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  inputClass: 'search-input',
  label: 'Search By',
  onChangeHandler: (value: any) => console.log('Search value:', value),
};
