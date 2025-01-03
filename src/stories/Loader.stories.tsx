import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Apploader from '../components/loader/loader';

export default {
  title: 'Components/Loader',
  component: Apploader,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<{ className: string }> = (args: any) => (
  <Apploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
