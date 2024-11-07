import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    //  backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: 'SampleText',
    type: 'subtitle',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'SampleText',
    type: 'subtitle',
  },
};

export const Headline: Story = {
  args: {
    children: 'SampleText',
    type: 'headline',
  },
};

export const Paragraph: Story = {
  args: {
    children: 'SampleText',
    type: 'paragraph',
  },
};
