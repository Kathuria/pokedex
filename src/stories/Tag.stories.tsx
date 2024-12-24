import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ColorfulTag from '../components/pokemonDetailsCard/colorfulTags/colorfulTag';

export default {
  title: 'Components/Tag',
  component: ColorfulTag,
  argTypes: {
    text: {
      control: 'select',
      options: ['Fire Type', 'Water Type', 'Grass Type', 'Electric Type'],
    },
    className: { control: 'text' },
    type: {
      control: 'select',
      options: ['fire', 'water', 'grass', 'electric'],
    },
  },
} as Meta<typeof ColorfulTag>;

const Template: StoryFn<typeof ColorfulTag> = (args) => <ColorfulTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Fire Type',
  className: 'tag-class',
  type: 'fire',
};
