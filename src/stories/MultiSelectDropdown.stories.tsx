import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AppMultiSelectDropDown from '../components/filter/multiSelectdropDown/multiSelectdropDown';

export default {
  title: 'Components/DropDown',
  component: AppMultiSelectDropDown,
  argTypes: {
    data: { control: 'object' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof AppMultiSelectDropDown>;

const Template: StoryFn<typeof AppMultiSelectDropDown> = (args) => <AppMultiSelectDropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select options',
};
