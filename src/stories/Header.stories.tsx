import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header from '../components/header/header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn<{ children: React.ReactNode }> = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Header Content',
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <div>
      <h1>Custom Header</h1>
      <p>Additional content here</p>
    </div>
  ),
};
